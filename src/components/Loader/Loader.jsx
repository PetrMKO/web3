import React from 'react';
import cn from "./Loader.module.css";

const Loader = ({width, height, className}) => {
    return (
        <div className={`${cn.loadWrapper} ${className}`}>
            <svg viewBox={`0 0 ${width ?? 24} ${height ?? 24}`} xmlns="http://www.w3.org/2000/svg" className={cn.loadIcon}>
                <path
                    d="m2.75 2 2.36 2.753A10 10 0 0 1 22 12h-2A8 8 0 0 0 6.413 6.274L8.75 9h-7l1-7zM21 22l-2.36-2.753A10 10 0 0 1 1.75 12h2a8 8 0 0 0 13.587 5.726L15 15h7l-1 7z"></path>
            </svg>
        </div>
    );
};

export default Loader;
