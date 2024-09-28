# **Progress Report: Decentralized Cloud Storage System Using Blockchain**

### Team Name: Geek Gods 

---

## **1. Introduction**

The **Decentralized Cloud Storage System** is a blockchain-based solution designed to enable secure, decentralized file storage. The key goals are to ensure data **privacy**, **integrity**, and **availability**, while decentralizing the file storage process. This project primarily leverages blockchain smart contracts and **IPFS** for decentralized storage. As of now, we have completed the majority of the blockchain functionalities, and our current focus is on developing the frontend user interface.

---

## **2. Progress so far**

- **Smart Contracts**: The core smart contracts have been successfully developed. These smart contracts handle:
  - **File Ownership**: Users can register and claim ownership of files.
  - **Access Control**: Permissions to access files are managed via smart contracts, ensuring transparency.
  - **Transactions**: File sharing, uploading, and retrieval are securely processed using blockchain, ensuring tamper-proof logs.




---

## **3. Current Work: Frontend Development**

We are now focusing on the development of a **user-friendly interface** that will allow users to:
- **Upload files**: A simple file upload form that encrypts files before uploading them to IPFS and the blockchain.
- **Manage files**: Users can view their uploaded files, check ownership details, and set access permissions for other users.
- **Download and decrypt files**: Authorized users can retrieve and decrypt files, provided they have the necessary permissions as stored on the blockchain.
- **Share the Files**: User can share the file to any other user with a transaction fee.

The main thing remaining is the integration of **Web3** and **Web2** functionalities.

The frontend is being developed using:
- **React.js**: For building an intuitive and responsive interface.
- **Web3.js**: For handling interactions between the frontend and blockchain (e.g., uploading files, setting permissions, and retrieving files).



---


## **4. Changes Since the Ideation Phase**

Initially, we focused solely on decentralizing file storage through IPFS. However, to address concerns about file availability in decentralized networks, we added a **Master Location Backup** as a safety measure. This ensures that users can always access their files, regardless of IPFS node availability.

---



