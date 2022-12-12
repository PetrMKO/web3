import React, {useContext, useEffect, useState} from 'react';
import cn from './MargetPage.module.css'

import {Web3Context} from "../../App";
import {tokensInfoLength} from "../../contract/contract";
import Loader from "../../components/Loader/Loader";
import MarketTokenCard from "./tokenCard/Cards/MarketTokenCard";

const MarketPage = () => {
    const {market} = useContext(Web3Context)
    const [tokens, setTokens] = useState([])

    useEffect(()=>{
        async function getTokens(){
            if(market) {
                const tokensArr = []
                for (let i = 0; i < tokensInfoLength; i++) {
                    tokensArr.push(await market.methods.tokensInfo(i).call())
                }
                console.log(tokensArr);
                setTokens(tokensArr)
            }
        }
        getTokens()
    }, [market])

    return (
        <>
            {tokens.length ? <div className={cn.market}>
                {tokens.length ? tokens.map((value, index) => <MarketTokenCard imgId={index} token={value} key={value.allocationAmount + value.allocationLimit}/>):null}
            </div> : <Loader width={50} height={50} className={cn.loader}/>}
        </>
    )
};

export default MarketPage;
