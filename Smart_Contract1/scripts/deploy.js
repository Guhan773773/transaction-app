const main = async ()=>{
    const Transaction = await ethers.getContractFactory("Transaction");
    const transaction = await Transaction.deploy();
    await transaction.deployed();

    console.log("Tractaction addresss : ", transaction.address)
}
const runmain = async () =>{
    try {
        await main()
        process.exit(0);
        
    } catch (error) {
        console.error("error");
        process.exit(1);
    }
}

runmain();