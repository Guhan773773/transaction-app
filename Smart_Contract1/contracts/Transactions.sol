// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Transaction{
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, uint timestamp, string message);

    struct transferStruct{
        address from;
        address receiver;
        uint amount; 
        string message;
        uint timestamp;

    }
    transferStruct[] transactions;

    function blockformation(address payable receiver, uint amount, string memory message)public{
        transactionCount += 1;
        transactions.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp));
        emit Transfer(msg.sender, receiver, amount , block.timestamp,message);
        }

    function getallTransaction() public view returns(transferStruct[] memory){
        return transactions;
    }
    function gettransaction()public view returns(uint256){
        return transactionCount;
    }
    }
