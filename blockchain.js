// Importing necessary modules from ethers
import { ethers, BrowserProvider } from "ethers";
import CertificateABI from './CertificateABI.json';


// Contract address (you can replace it with your actual contract address)
export const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';

// Function to connect the wallet
export async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.request({ method: "eth_requestAccounts" });

            // Create a provider using BrowserProvider (Ethers v6)
            const provider = new BrowserProvider(window.ethereum);
            console.log("Wallet connected!");

            // Get the signer (connected account)
            const signer = await provider.getSigner();
            console.log("Signer address:", await signer.getAddress());

            return signer;
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.log("No Ethereum provider found. Install MetaMask.");
    }
}

// Function to get the blockchain contract instance
export async function getBlockchain() {
    try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        console.log("CertificateABI: ", CertificateABI);

        // Access the ABI correctly
        const contract = new ethers.Contract(contractAddress, CertificateABI.abi, signer);
        return contract;
    } catch (error) {
        console.error("Error getting blockchain contract:", error);
    }
}

