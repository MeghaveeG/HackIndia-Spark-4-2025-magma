require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",  // Make sure this version matches your contract's Solidity version
  paths: {
    sources: "./contracts",    // Path to your Solidity contracts
    artifacts: "./artifacts"   // Path where compiled files will be saved
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};

