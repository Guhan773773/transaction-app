const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TransactionsModule", (m) => {

  const transaction = m.contract("Transaction");

  return { transaction };
});

