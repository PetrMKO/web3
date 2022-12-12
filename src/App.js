import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import Layout from "./components/Layout/Layout";
import {createContext, useEffect, useMemo, useState} from "react";
import {contractABI, contractAddress} from "./contract/contract";
import {busdContractABI} from "./contract/busdContract";
import Web3 from "web3";

export const Web3Context = createContext({
    web3: new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')),
    market: null,
    busd: null,
    account: null,
    setAccount: ()=>{},
    accountBalance: null,
    setAccountBalance: ()=>{}
})


function App() {
    const [account, setAccount] = useState(null)
    const [accountBalance, setAccountBalance] = useState(null)
    const [context, setContext] = useState({
        web3: new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')),
        market: null,
        busd: null,
        account: null,
        setAccount: setAccount,
        accountBalance: accountBalance,
        setAccountBalance: setAccountBalance
    })

    const contextValue = useMemo(()=>({
        ...context,
        account:account,
        accountBalance: accountBalance
    }), [account, accountBalance, context])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout><Outlet/></Layout>,
            children: [
                {
                    path: "market",
                    element: <MarketPage/>
                }, {
                    path: "account",
                    element: <AccountPage/>
                },
                {
                    path: '/',
                    element: <MarketPage/>
                },
                {
                    path: '*',
                    element: <h1>Not found</h1>
                }
            ]
        }
    ])

    useEffect(() => {
        const loadContract = async () => {
            const web3 = new Web3(Web3.givenProvider)
            const contract = await new web3.eth.Contract(contractABI, contractAddress)
            const busdAddress = await contract.methods.busd().call()
            const busd = await new web3.eth.Contract(busdContractABI, busdAddress)
            console.log(web3, contract, busdAddress, busd)
            setContext({
                web3: web3,
                market: contract,
                busd: busd,
                getAccount: account,
                setAccount: setAccount,
                accountBalance: accountBalance,
                setAccountBalance: setAccountBalance
            })
        }

        loadContract()
    }, [])

    return (
        <div className="App">
            <Web3Context.Provider value={contextValue}>
                <RouterProvider router={router}/>
            </Web3Context.Provider>
        </div>
    );
}

export default App;
