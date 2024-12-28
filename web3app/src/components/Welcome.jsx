import React, { useContext } from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsHourglassBottom, BsInfoCircle} from 'react-icons/bs'
import Loader from './Loader';
import { TransactionContext} from '../context/TransactionContext';


const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white'

const Input = ({placeholder,name,type, value, handleChange })=>(
  <input 
  placeholder={placeholder}
  type={type}
  step = '0.00001'
  value = {value}
  onChange = {(e)=>handleChange(e,name)}
  className='my-2 w-full rounded-2 p-2 outline-none border-none bg-transparent text-white text-sm white-glassmorphism'
  />
);

const Welcome = () => {
  
  
  const {connectWallet} = useContext(TransactionContext);
  const handleSubmit = ()=>{

  }
  return (
    <div className='flex w-full justify-center items-center '>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 oy-12 px-4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Coin/Token <br /> Across the world
          </h1>
         <p className=' md:text-2xl text-white text-gradient py-1 '
         >Explore crypto world, Buy and Sell </p>
          <button type='button' 
          onClick={connectWallet} 
          className= 'flex flex-row text-white item-center justify-center text-base bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd] mx-3 my-2 p-1'>
          <p className=' text-white font semibold'>Connect to wallet</p>
        </button>  
        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
          <div className={`rounded-tl-2xl ${commonStyles}`}>
            Sell
          </div>
          <div className={`${commonStyles}`}>
            Swap
          </div>
          <div className={`rounded-tr-2xl ${commonStyles}`}>
            Buy
          </div>
          <div className={`rounded-bl-2xl ${commonStyles}`}>
            Reliablity
          </div>
          <div className={`${commonStyles}`}>
            Security
          </div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
            Blockchain
          </div>
        </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
          <div className='p-3 justify-end items - start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start rounded-full'>
                <div className='w-10 h-10 rounded-full border-4 border-white flex justify-center items-center '>
                  <SiEthereum fontSize={21} color='white'/>             
                  </div>
                 <BsInfoCircle fontSize={19} color='white'/>
              </div>
              <p className='text-white font-light text-sm my-1 '>
                Address
              </p>
              <p className='text-white font-semibold text-ig mt-0.5'>
                Ethereum
              </p>
              
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify- start items-center blue-glassmorphism'>
          <Input placeholder='Address to' name="addressto" type="text" handleChange={()=>{}}/>
          <Input placeholder='Amount   (ETH)' name="amount" type="number" handleChange={()=>{}}/>
          <Input placeholder='Keyword (gif)' name="keyword" type="text" handleChange={()=>{}}/>
          <Input placeholder='Message' name="message" type="text" handleChange={()=>{}}/>
          <div className='h-[1px] w-full bg-gray-400 my-2'/>
          
          {true ? (
            <Loader />
          )
            :(
            <button type='button' onClick={handleSubmit} className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>
            Submit
            </button>
          )}
            
          
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Welcome;