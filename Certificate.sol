
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Certificate {
    struct CertificateData {
        uint256 id;
        string recipientName;
        string courseName;
        string issuedBy;
        uint256 issueDate;
        string ipfsHash;
    }

    mapping(uint256 => CertificateData) private certificates;
    uint256 public certificateCount;

    event CertificateIssued(uint256 indexed id, string recipientName, string courseName, string ipfsHash);

    function issueCertificate(string memory _recipientName, string memory _courseName, string memory _issuedBy, string memory _ipfsHash) public {
        certificateCount++;
        certificates[certificateCount] = CertificateData(certificateCount, _recipientName, _courseName, _issuedBy, block.timestamp, _ipfsHash);
        emit CertificateIssued(certificateCount, _recipientName, _courseName, _ipfsHash);
    }

    function getCertificate(uint256 _id) public view returns (uint256, string memory, string memory, string memory, uint256, string memory) {
        require(_id > 0 && _id <= certificateCount, 'Certificate does not exist.');
        CertificateData memory cert = certificates[_id];
        return (cert.id, cert.recipientName, cert.courseName, cert.issuedBy, cert.issueDate, cert.ipfsHash);
    }
}
