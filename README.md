# **Decentralized Cloud Storage System Using Blockchain**

## Visit Our Website [here](https://66f94161293e17055a2e07fe--fancy-donut-886f5d.netlify.app)
 (*Note that to use this website you need to have Metamask extension installed in the browser and connected to Sepolia Testnet.*)
## **Project Overview**

- This project aims to build a **Decentralized Cloud Storage System** using blockchain technology. The system enables users to securely store, share, and access files without depending on a central authority. The system ensures **data privacy**, **integrity**, and **availability** by distributing files across multiple nodes using IPFS. Additionally, a **master location** is used to store files, guaranteeing **24/7 availability**, even if the decentralized nodes go offline.
---
## To watch the demo video of our project [Click Here](https://youtu.be/mg5qG349BCw)

---


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

   ---
## **Project Images**

1. **home page**:
<img title="a title" alt="Alt text" src="/WhatsApp Image 2024-09-29 at 15.02.57_8fb78e80.jpg">

2. **upload image**:
<img title="a title" alt="Alt text" src="/Screenshot 2024-09-29 161928.png">
<img title="a title" alt="Alt text" src="/Screenshot 2024-09-29 161937.png">

3. **Share the access of your image**:
<img title="a title" alt="Alt text" src="/Screenshot 2024-09-29 162203.png">

4. **See your data and others data**:
<img title="a title" alt="Alt text" src="/WhatsApp Image 2024-09-29 at 15.02.57_8fb78e80.jpg">

5. **Approval of contracts**:
<img title="a title" alt="Alt text" src="/WhatsApp Image 2024-09-29 at 15.03.55_2d94a298.jpg">
<img title="a title" alt="Alt text" src="/WhatsApp Image 2024-09-29 at 15.21.21_fcc8f7c2.jpg">
<img title="a title" alt="Alt text" src="/WhatsApp Image 2024-09-29 at 15.37.54_43476377.jpg">
