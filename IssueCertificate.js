
import React from 'react';
import CertificateForm from '../components/CertificateForm';
import { getBlockchain } from '../utils/blockchain';

function IssueCertificate() {
    const contract = getBlockchain();

    return (
        <div>
            <h2>Issue Certificate</h2>
            <CertificateForm contract={contract} />
        </div>
    );
}

export default IssueCertificate;
