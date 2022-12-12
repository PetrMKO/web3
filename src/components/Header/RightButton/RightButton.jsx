import React from 'react';
import cn from "./RightButton.module.css";


const RightButton = ({onClick, children}) => {
    return (
        <button className={cn.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default RightButton;
