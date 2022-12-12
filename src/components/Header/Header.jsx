import React, {useContext, useState} from 'react';
import cn from './Header.module.css'
import NavButton from "./NavButton/NavButton";
import {NavList} from "./NavList";
import {Web3Context} from "../../App";
import RightButton from "./RightButton/RightButton";

const Header = () => {
    const [accountError, setError] = useState(null)
    const {web3, busd, account, setAccount, accountBalance, setAccountBalance} = useContext(Web3Context)

    async function updateBalance(address = account) {
        busd.methods.balanceOf(address).call().then(console.log)
        setAccountBalance(web3.utils.fromWei(await busd.methods.balanceOf(address).call()))
    }

    function load() {
        web3.eth.requestAccounts()
            .then(accounts => {
                setAccount(accounts[0])
                console.log(accounts[0]);
                return accounts[0]
            })
            .then(accountAddress => {
                updateBalance(accountAddress)
            })
            .catch(err => setError(err.message))
    }


    return (
        <div className={cn.header}>
            <div className={cn.sideBlock}>
                {accountBalance ? Number(accountBalance).toFixed(3) + ' BUSD' : null}
            </div>
            <div className={cn.navBar}>
                {NavList.map(item =>
                    <NavButton to={item.path} label={item.label} key={item.path}/>
                )}
            </div>
            <div className={cn.sideBlock}>
                {account ? <RightButton onClick={()=>updateBalance()}>
                    <svg fill="#f9c4d2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#f9c4d2" height="24" width="24">
                        <path
                            d="M5.11 4.753 2.75 2l-1 7h7L6.413 6.274a8 8 0 1 1-1.723 8.98l-1.825.813A10 10 0 1 0 5.11 4.753z"></path>
                    </svg>
                    Обновить баланс
                </RightButton>:<RightButton onClick={()=>load()}>
                    <svg stroke="#f9c4d2" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#f9c4d2" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Подключить Metamask
                </RightButton> }
            </div>

        </div>
    );
};

export default Header;
