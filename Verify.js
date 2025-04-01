
import React from 'react';
import VerifyCertificate from '../components/VerifyCertificate';
import { getBlockchain } from '../utils/blockchain';

function Verify() {
    const contract = getBlockchain();

    return (
        <div>
            <h2>Verify Certificate</h2>
            <VerifyCertificate contract={contract} />
        </div>
    );
}

export default Verify;
