# **Decentralized Cloud Storage System Using Blockchain**

## **Project Overview**

This project aims to build a **Decentralized Cloud Storage System** using blockchain technology. The system enables users to securely store, share, and access files without depending on a central authority. The system ensures **data privacy**, **integrity**, and **availability** by distributing files across multiple nodes using IPFS. Additionally, a **master location** is used to store files, guaranteeing **24/7 availability**, even if the decentralized nodes go offline.

### **Key Features:**
- **Decentralized File Storage**: Files are fragmented and stored across multiple nodes using IPFS to avoid central control.
- **Master Location Backup**: Ensures 24/7 availability of files, even if files on IPFS nodes are unavailable.
- **File Encryption**: Client-side AES-256 encryption ensures that files are securely stored and only accessible by authorized users.
- **Access Control**: Blockchain-based smart contracts handle file ownership, access rights, and transactions in a transparent, trustless manner.
- **Incentive Mechanism**: A token-based reward system incentivizes storage providers to maintain data availability.

---

## **Technology Stack**

### **Blockchain (Ethereum/Polkadot)**  
- **Smart Contracts (Solidity)**: For managing file ownership, permissions, and transactions, ensuring transparent interactions between users and storage providers.

### **IPFS (InterPlanetary File System)**  
- **Decentralized Storage**: Files are distributed across nodes, leveraging the peer-to-peer nature of IPFS for tamper-proof, decentralized file hosting.
  
### **Master Location Storage**  
- **Availability Guarantee**: Files are stored in a centralized master location to ensure they are always available, even if the decentralized IPFS nodes are temporarily offline.

### **Web3.js**  
- **Blockchain Interactions**: Web3.js is used to interface between the front-end and the blockchain, allowing users to interact with the system (upload/download files, manage access rights, etc.).

### **React.js**  
- **Frontend UI**: A user-friendly React interface allows users to upload, view, and manage their files easily. It also integrates with Web3.js for blockchain transactions.

### **AES-256 Encryption**  
- **Client-Side Encryption**: Files are encrypted on the client side using AES-256 to ensure that only the uploader and authorized users can decrypt the file content.

---

## **How It Works**

1. **File Upload**: Users upload files to the system via the React.js front-end. Files are encrypted on the client side using AES-256 encryption for maximum privacy.
2. **File Storage**: The encrypted file is stored in two places:
   - **IPFS Nodes**: Decentralized storage for redundancy.
   - **Master Location**: A backup location to ensure 24/7 availability of files.
3. **File Access and Sharing**: Users can set access permissions using blockchain smart contracts. Only those with the correct permissions (as stored on the blockchain) can decrypt and download the file.
4. **Incentives**: Storage providers are incentivized through a token-based system to maintain uptime and host files across the IPFS network.

---

## **Project Setup**

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone [repository link]
   cd [project directory]
   npm install
   npx hardhat compile
   cd client
   npm install
   npm start