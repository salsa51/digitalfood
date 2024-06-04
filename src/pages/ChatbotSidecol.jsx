import React from "react";
// import { IoIosMenu } from "react-icons/io"; 
import { CiSearch } from "react-icons/ci";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { TiArrowForward } from "react-icons/ti";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbSend2 } from "react-icons/tb";
import { IoChevronBack } from "react-icons/io5";
import { ImBin2 } from "react-icons/im";

// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import '../styles/chatbotsidecol.css';


export const ChatbotSidecol = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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
            {/* <div className="outline-essentional-wrapper">
           
            <Link to="/" className="outline-essentional ">
           <IoIosMenu color="#010101"/>
            </Link>

           
            </div> */}
<a href="Chatbot">
            <div className="">
              <img className="outline-essentional" alt="Outline essentional" src="menu.png" onClick={toggleSidebar}
              //  onClick={() => navigate('/marketplace')}
              />
            </div>
            </a>

            {sidebarOpen && (
        <div className="sidebar">
          <div className="frame">
            <div className="frame-2">
              <img className="bold-duotone" alt="Bold duotone" src="add-square.png" />
              <div className="text-wrapper">New Chat</div>
            </div>
            <div className="frame-3">
              <img className="bold-duotone-arrows" alt="Bold duotone arrows" src="round-alt-arrow-down.png" />
              <div className="text-wrapper-2">Recent Chats</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Rephrase text...</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-4">Fix this code ne...</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-3">Sample Copy for...</div>
            </div>
            <div className="frame-6">
              <div className="image-wrapper">
                <img className="image" alt="Image" src="parto.png" />
              </div>
              <div className="frame-7">
                <div className="text-wrapper-5">Welcome back,</div>
                <div className="text-wrapper-6">Parto</div>
              </div>
              <img className="arrow-down" alt="Arrow down" src="arrow-down-2.svg" />
            </div>
            <div className="outline-essentional-wrapper">
              <img className="outline-essentional" alt="Outline essentional" src="hamburger-menu.png" />
            </div>
          </div>
        </div>
      )}




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
        <IoChevronBack  className="back flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-2 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-3 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-4 flex justify-center items-center" color="#02040F"/>
      </div>
    </div>
  );
};

export default ChatbotSidecol
