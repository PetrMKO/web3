import React from 'react';
import cn from "../TokenCard.module.css";
import TokenCard from "../TokenCard";

const UserTokenCard = ({imgId, token, count}) => {
    return (
        <TokenCard imgId={imgId}>
            <div className={cn.description}>
                <span>ID токена</span>
                {imgId}
                <span>Куплено</span>
                {count}
            </div>
        </TokenCard>
    );
};

export default UserTokenCard;
