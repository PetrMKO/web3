import React, {useContext, useState} from 'react';
import cn from "../TokenCard.module.css";
import TokenCard from "../TokenCard";
import {Web3Context} from "../../../../App";
import MintModal from "./MintModal";

const MarketTokenCard = ({imgId, token}) => {
    const {web3, account} = useContext(Web3Context)

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <TokenCard imgId={imgId}>
                <div className={cn.description}>
                    <div>ID токена</div>
                    {imgId}
                    <div>Цена токена:</div>
                    {web3.utils.fromWei(String(token.price))} BUSD
                </div>

                <button disabled={!(token.allowMint && token.pauseMint)} className={cn.buyBtn} onClick={()=>{
                    setIsModalOpen(!!account)
                }}>
                    Купить
                </button>

                {isModalOpen && account && <MintModal tokenId={imgId} token={token} closeModal={()=>setIsModalOpen(false)}/>}
            </TokenCard>

        </>
    );
};

export default MarketTokenCard;
