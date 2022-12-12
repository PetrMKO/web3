import React from 'react';
import cn from './TokenCard.module.css'


const TokenCard = ({imgId, children}) => {
    return (
        <div className={cn.card}>
            <div className={cn.iconWrapper}>
                <img src={require(`./images/${imgId}.png`)} alt="icon" className={cn.icon}/>
            </div>

            {children}

        </div>
    );
};

export default TokenCard;
