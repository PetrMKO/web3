import React, {useContext, useEffect, useState} from 'react';
import cn from './AccountPage.module.css'

import busdIcon from './img/busd2.svg'
import {tokensInfoLength} from "../../contract/contract";
import {Web3Context} from "../../App";
import Loader from "../../components/Loader/Loader";
import UserTokenCard from "../MarketPage/tokenCard/Cards/UserTokenCard";

const AccountPage = () => {
    const {web3, market, busd, account} = useContext(Web3Context)

    const [isLoading, setIsLoading] = useState(false)
    const [balance, setBalance] = useState(null)
    const [accountTokens, setAccountTokens] = useState([])

    useEffect(() => {
        async function getBalance() {
            setIsLoading(true)
            if (account) {
                setBalance(web3.utils.fromWei(await busd.methods.balanceOf(account).call()))
                const accountTokens = await market.methods.balanceOfBatch(Array(tokensInfoLength)
                    .fill(account, 0, tokensInfoLength), Array(tokensInfoLength).fill(1)
                    .map((a, i)=>i)).call().catch(console.log)

                const tokens = []
                for(let i=0; i<tokensInfoLength; i++){
                    if(accountTokens[i] !== '0'){
                        tokens.push({
                            id: i,
                            token: await market.methods.tokensInfo(i).call(),
                            count: accountTokens[i]
                        })
                    }
                }
                console.log(tokens);
                setAccountTokens(tokens)
            }
            setIsLoading(false)
        }
        getBalance()

    }, [account])

    return (<div className={cn.content}>
        <div className={cn.about}>
            <h3>
                Маркет использвет токен BUSD <br/>
            </h3>
            <h3>
                Сеть – BNB Smart Chain
            </h3>
        </div>
        <div className={`${cn.accountCard} ${cn.whiteGlass}`}>
            {isLoading
                ? <div className={cn.loadWrapper}><Loader width={50} height={50} className={cn.loader}/></div>
                : (account
                    ? <>
                        <div className={cn.iconWrapper}>
                            <img src={busdIcon} alt={'jj'} className={cn.icon}/>
                            <h2>BUSD</h2>
                        </div>
                        <span>
                        Адресс
                        </span>
                        <div className={cn.accountAddress}>
                            {account}
                        </div>
                        <span>
                            Баланс
                        </span>
                        <span>
                            {balance}
                        </span>
                    </>
                    : <h2 className={cn.warning}>
                        Для отображение баланса подключите кошелек Metamsk
                    </h2>)}
        </div>
        <div className={cn.accountTokensTitle} onClick={()=>console.log(accountTokens)}>
            {account ? (accountTokens.length ? <h3>Ваши токены</h3> : <h3>Увы, но пока ничего не куплено</h3>) : null}
        </div>
        <div className={cn.accountTokensList}>
            {accountTokens.map((value, index)=> <UserTokenCard imgId={value.id} token={value.token} count={value.count}/>)}
        </div>
    </div>);
};

export default AccountPage;
