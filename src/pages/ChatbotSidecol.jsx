import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiArrowForward } from "react-icons/ti";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbSend2 } from "react-icons/tb";
import { ImBin2 } from "react-icons/im";


import '../styles/chatbotsidecol.css';


export const ChatbotSidecol = () => {
  return (
    <div className="chatbot-sidecol">
      <div className="div">
        <div className="search">
          <div className="overlap-group">
          <CiSearch className="img" color="#7E7E7E"/>
            <div className="text-wrapper">Search</div>
           
          </div>
        </div>
        <div className="sidebar">
          <div className="frame">
            <div className="image-wrapper">
              <img className="image" alt="Image" src="parto.png" />
            </div>
            <div className="outline-essentional-wrapper">
            <IoIosMenu className="outline-essentional" color="#F5F5F5"/>
           
            </div>
          </div>
        </div>
        <div className="outer">
          <div className="main-message-box">
            <div className="overlap-group-2">
              <p className="body">Type a new message here</p> 
        
              < HiOutlineEmojiHappy  className="emojis flex justify-center items-center" color="#02040F"/>
              <AiOutlinePaperClip  className="outline-messages flex justify-center items-center" color="#02040F"/>
              
            </div>
            <TbSend2  className="send flex justify-center items-center" color="#02040F"/>
          
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="border-bottom" />
            <p className="p">Selamat siang, apakah ada sayur kol, kecap, cabai, yang exspor dari brazil kak?</p>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <div className="border-bottom-2" />
            <p className="text-wrapper-2">Halo kak, perkenalkan saya safira dari Digital Food, ada kak silahkan.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="image-2 " alt="Image" src="parto.png" />
        </div>
        <div className="frame-2">
          <img className="image-2 " alt="Image" src="parto.png" />
        </div>
        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="border-bottom-3" />
            <div className="text-wrapper-3">Thank You :)</div>
          </div>
        </div>
        <div className="frame-3">
          <img className="image-3 flex justify-center items-center " alt="Image" src="kartun.png" />
        </div> 
        <TbAlertTriangleFilled className="bold-duotone-2 flex justify-center items-center" color="#FF3900"/>
        <ImBin2  className="bold-duotone flex justify-center items-center" color="#082567"/>
        
        <TiArrowForward  className="outline-messages-2 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-3 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-4 flex justify-center items-center" color="#02040F"/>
      </div>
    </div>
  );
};

export default ChatbotSidecol
