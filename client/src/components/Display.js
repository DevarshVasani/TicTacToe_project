import { useState,useEffect } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } catch (e) {
      console.log(e);
      alert("You don't have access");
    }

    
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  useEffect(() => {
    const shareButton = document.getElementById('shareButton');
    const chooseButton = document.querySelector('.button_position');

    if (shareButton && chooseButton) {
      const shareRect = shareButton.getBoundingClientRect();
      chooseButton.style.position = 'absolute';
      chooseButton.style.top = `${shareRect.top - 20}px`;
      console.log("the top is" + shareRect.top);
      console.log(shareRect.left);
      chooseButton.style.left = `${shareRect.left + 200}px`;
    }
  }, []);



  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="button_position u-border-2 u-border-white u-btn u-btn-round u-button-style u-none u-radius-30 u-text-hover-white u-btn-1" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;
