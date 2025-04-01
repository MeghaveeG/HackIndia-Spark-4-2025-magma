
// const { ethers } = require("hardhat");

// async function main() {
//   // Get the contract factory
//   const Certificate = await ethers.getContractFactory("Certificate");

//   // Deploy the contract
//   const certificate = await Certificate.deploy();

//   // Wait for the deployment to finish
//   await certificate.waitForDeployment();

//   console.log("Certificate deployed to:", certificate.target); 
// }

const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  const ContractFactory = await hre.ethers.getContractFactory("Certificate");
  console.log("Contract factory loaded.");

  // Deploy the contract
  const contract = await ContractFactory.deploy();
  console.log("Contract deployed at:", contract.address);
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exit(1);
});
