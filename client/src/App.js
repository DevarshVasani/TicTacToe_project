import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x2b5b4203D86bBD82a972c33c711943db91EBEaF8";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );  
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
      
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}




      <div className="App">
        

        <section className="u-clearfix u-image u-section-1" id="carousel_a00d">
          
          
      <div className="u-clearfix u-sheet u-sheet-1">
        
        <div className="u-align-center u-container-align-center u-container-style u-expanded-width-xs u-group u-shape-rectangle u-group-1">
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <h2 className="u-custom-font u-font-pt-sans u-text u-text-body-alt-color u-text-default u-text-1"><b>Decentralized</b> Cloud <b>System</b>
            </h2>
            <h5 class="u-text u-text-body-alt-color u-text-2">design studio</h5>
            
                <button className="u-border-2 u-border-white u-btn u-btn-round u-button-style u-none u-radius-30 u-text-hover-white u-btn-1" id="shareButton" onClick={() => setModalOpen(true)}>
                  Share
                </button>

          
          </div>
        </div>
      </div>
    </section>
  
      
      
        <div className="bg"></div>
        {/* <div class="bg bg2"></div>
        <div class="bg bg3"></div> */}


        <p style={{ color: "white" }} className="account_position">
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>


      
      
    </>
  );
}

export default App;
