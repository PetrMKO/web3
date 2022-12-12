import React, {useContext, useEffect, useState} from 'react';
import {Web3Context} from "../../../../App";
import {contractAddress} from "../../../../contract/contract";
import {pancakeABI, pancakeContractAddress} from "../../../../contract/pancakeRouterContract";
import BigNumber from "bignumber.js";
import fromExponential from "from-exponential";
import cn from "../TokenCard.module.css";

const ALLOWANCE = 10 ** 10 * 10 ** 18

const SLIPPAGE_PERCENT = 0.93

const DEADLINE_OVER_NOW = 1000

const MintModal = ({tokenId, token, closeModal}) => {
    const {web3, market, account, busd, accountBalance, setAccountBalance} = useContext(Web3Context)
    const [error, setError] = useState(null)
    const [isAllowanceLoad, setIsAllowanceLoad] = useState(false)

    const maxAllocation = web3.utils.fromWei(token.maxAllocation)
    const tokenBusdPrice = web3.utils.fromWei(token.price)

    const [allowance, setAllowance] = useState('')
    const [allocationAmountBusd, setAllocationAmountBusd] = useState('')
    const [isBalanceEnough, setIsBalanceEnough] = useState(false)

    const getDeadline = () => {
        return Math.floor(new Date().getTime() / 1000) + DEADLINE_OVER_NOW;
    }

    const getAllowance = async ()=> {
        return await busd
            .methods
            .allowance(account, contractAddress)
            .call()
    }

    async function updateAllowance() {
        if (token && contractAddress) {
            setIsAllowanceLoad(true)
            const newAllowance = await getAllowance()
            console.log(newAllowance);
            setAllowance(newAllowance)
            setIsAllowanceLoad(false)
        }
    }

    async function getMinAmountOut () {
        const pancakeContract = new web3.eth.Contract(pancakeABI, pancakeContractAddress)
        // const path = [await market.methods.busd().call(), await market.methods.mmpro().call()]
        const path = ["0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x6067490d05f3cf2fdffc0e353b1f5fd6e5ccdf70"]

        console.log(getDeadline()*1000);
        return new BigNumber((await pancakeContract
            .methods
            .getAmountsOut(allocationAmountBusd, path)
            .call())[1])
    }

    const approve = async () => {
        const amount2eth = fromExponential(ALLOWANCE);
        try {
            if (token) {
                await busd
                    .methods
                    .approve(contractAddress, amount2eth)
                    .send({from: account}).once('receipt', () => {
                        updateAllowance()
                    });
            }
        } catch (e) {
            setError('Не получилось, не фортануло, причина – ' + e.message)
        }
    }

    async function mintAndAllocate() {

        if (isBalanceEnough && allocationAmountBusd) {
            const mintTokenId = tokenId.toString()
            const amountOutMin = (await getMinAmountOut()).multipliedBy(SLIPPAGE_PERCENT).toFixed(0).toString()
            const allocationAmount = new BigNumber(10).pow(18).multipliedBy(+allocationAmountBusd).toString()
            const deadline = getDeadline()

            console.log('getMinAmountOut', (await getMinAmountOut()).toString(), amountOutMin)
            console.log(mintTokenId, Number(amountOutMin), deadline, Number(allocationAmount))

            if (market && mintTokenId && allocationAmount && deadline) {
                market
                    .methods
                    .mintAndAllocate(
                        mintTokenId,
                        amountOutMin,
                        deadline,
                        allocationAmount,
                        []
                    ).send({from: account}).once('receipt', () => {
                    setAllocationAmountBusd('')
                }).then( ()=>{busd.methods.balancaOf(account).call().then((balance)=>setAccountBalance(web3.utils.fromWei(balance)))}
                ).catch(e => {
                    console.log(e)
                    setError('Не получилось, не фортануло, причина – ' + e.message)
                })
            }
        }
    }

    useEffect(()=>{
        updateAllowance()
    })

    return (
        <div className={cn.modal} onClick={()=>closeModal()}>
            <div className={cn.mintCard}
                 onClick={(e)=>{
                     e.stopPropagation()
                 }}>
                <span>Аккаунт</span>
                {account}

                <span>ID токена</span>
                {tokenId}

                <span>Цена</span>
                {web3.utils.fromWei(token.price)}

                <span>Количество</span>
                <div className={cn.allocationInput}>
                    <input type="number" className={cn.countInput} min={1} max={100} value={allocationAmountBusd}
                           onChange={(e)=>{
                               setError(null)
                               if((+e.target.value + +tokenBusdPrice) > +accountBalance)
                                   setIsBalanceEnough(false)
                               else setIsBalanceEnough(true)
                               setAllocationAmountBusd(e.target.value)
                           }}
                           onBlur={()=>{
                               if(maxAllocation < +allocationAmountBusd){
                                   setAllocationAmountBusd(maxAllocation)
                               }
                           }}
                    />
                    {!isBalanceEnough && allocationAmountBusd && 'Дружочек, денег не хватит'}

                </div>

                {allowance > +token.price + +allocationAmountBusd
                    ? <button disabled={!isBalanceEnough || allocationAmountBusd === ''} className={[cn.buyBtn, cn.innerBuyButton].join(' ')} onClick={mintAndAllocate}>Купить
                    </button>
                    : <button disabled={isAllowanceLoad} className={[cn.buyBtn, cn.innerBuyButton].join(' ')} onClick={approve}>
                        Но сначала разрещите нам тратить денюшки
                    </button>}

                {!!error && <div className={cn.errorMsg}>
                    {error.split('–').map(value =><>{value}<br/></>)}
                </div>}
            </div>
        </div>
    );
};

export default MintModal;
