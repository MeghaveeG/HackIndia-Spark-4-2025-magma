import React, { useState } from 'react';
import { connectWallet, getBlockchain } from '../utils/blockchain';
import "./CertificateForm.css"

const CertificateForm = () => {
    const [signerAddress, setSignerAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [recipientName, setRecipientName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [issuedBy, setIssuedBy] = useState('');
    const [ipfsHash, setIpfsHash] = useState('');
    const [message, setMessage] = useState('');

    // Connect the wallet when button is clicked
    const handleConnectWallet = async () => {
        try {
            const signer = await connectWallet();
            if (signer) {
                const address = await signer.getAddress();
                setSignerAddress(address);
                setIsConnected(true);
                console.log("Wallet connected with address:", address);
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    // Issue certificate by interacting with the smart contract
    const handleIssueCertificate = async () => {
        try {
            const contract = await getBlockchain();
            if (contract) {
                const tx = await contract.issueCertificate(
                    recipientName,
                    courseName,
                    issuedBy,
                    ipfsHashb85c67b1d1c5d925e9bd
                );
                await tx.wait(); // Wait for the transaction to be mined
                setMessage("Certificate issued successfully!");
                console.log("Certificate issued for:", recipientName);
            }
        } catch (error) {
            console.error("Error issuing certificate:", error);
            setMessage("Failed to issue certificate.");
        }
    };

    return (
        <div>
            <h2>Issue Certificate</h2>
            {!isConnected ? (
                <button onClick={handleConnectWallet}>Connect Wallet</button>
            ) : (
                <>
                    <p>Connected: {signerAddress}</p>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Recipient Name" 
                            value={recipientName} 
                            onChange={(e) => setRecipientName(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Course Name" 
                            value={courseName} 
                            onChange={(e) => setCourseName(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Issued By" 
                            value={issuedBy} 
                            onChange={(e) => setIssuedBy(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="IPFS Hash" 
                            value={ipfsHash} 
                            onChange={(e) => setIpfsHash(e.target.value)} 
                        />
                        <button onClick={handleIssueCertificate}>Issue Certificate</button>
                    </div>
                    {message && <p>{message}</p>}
                </>
            )}
        </div>
    );
};

export default CertificateForm;
