import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractAddress,contractABI } from '../../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window

//to fetch our contract
const getEthereumContract =()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
        contractABI,
        contractAddress,
        signer
    );

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({children})=>{
    const [Current, setCurrent] = useState("")
    const Checkifwalletisconnected = async() =>{
        if (!ethereum ) return alert("Insatll metamask");
        const accounts = await ethereum .request({method: "eth_account"})

        
        console.log(accounts);
    }
    const connectWallet = async() =>{
        try {
            if (!ethereum ) return alert("Insatll metamask");
            const accounts = await ethereum.request({method: "eth_requestaccounts"})

            setConnected(accounts[0]);
    
        } catch (error) {
            console.log(error);
            throw new Error("no ethereum object");
            
        }

    }
    useEffect(() => {
        Checkifwalletisconnected();
    },  [])
    
    return(
    <TransactionContext.Provider value={{connectWallet}}>
        {children}
    </TransactionContext.Provider>
    )
}
