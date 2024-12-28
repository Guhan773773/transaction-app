require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/VWgPSFvDu2YZPbLV7fYTuDS0O48LK5gk',
      accounts: ['6d4165c29a58cb041e0ab44722d62c28ca22fce3a349866d815bd6dea8671762']
    }
  }
};
