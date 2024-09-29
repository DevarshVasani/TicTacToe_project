import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  const nosharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      {/* <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div> */}
      <div class="dialogBackground">
  <div class="dialogContainer">
    <button class="dialogCloseButton" id="cancelbtn" onClick={() => setModalOpen(false)}>&times;</button>

    <h2 class="dialogHeader">Share With</h2>

    <input type="text" class="dialogInput" placeholder="Enter Address" />

    <select id="selectNumber" class="dialogDropdown">
      <option className="address  ">People with my access</option>
      
    </select>




    <button onClick={() => sharing()} class="dialogButton">share</button><div></div>
    <button onClick={() => nosharing()} class="dialogButton">Disallow</button>

  </div>
</div>

    </>
  );
};
export default Modal;
