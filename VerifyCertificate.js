
import React, { useState } from 'react';
import { getBlockchain } from '../utils/blockchain';

function VerifyCertificate() {
    const [certId, setCertId] = useState('');
    const [isValid, setIsValid] = useState(null);

    const verifyCertificate = async () => {
        const contract = getBlockchain();
        try {
            const valid = await contract.verifyCertificate(certId);
            setIsValid(valid);
        } catch (error) {
            console.error(error);
            alert('Error verifying certificate');
        }
    };

    return (
        <div>
            <h2>Verify Certificate</h2>
            <input placeholder="Certificate ID" value={certId} onChange={e => setCertId(e.target.value)} />
            <button onClick={verifyCertificate}>Verify</button>
            {isValid !== null && <p>Certificate Validity: {isValid ? 'Valid' : 'Invalid'}</p>}
        </div>
    );
}

export default VerifyCertificate;

