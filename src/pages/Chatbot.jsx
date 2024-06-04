import React from "react";
import "../styles/chatbot.css";

export const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="div">
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
                <img className="image" alt="Image" src="image-11.png" />
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
        <div className="outer">
          <div className="main-message-box">
            <div className="overlap-group">
              <p className="body">Type a new message here</p>
              <img className="send" alt="Send" src="send.png" />
              <img className="emojis" alt="Emojis" src="emojis.png" />
              <img className="outline-messages" alt="Outline messages" src="paperclip.png" />
            </div>
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
            <p className="text-wrapper-7">Halo kak, perkenalkan saya safira dari Digital Food, ada kak silahkan.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="img" alt="Image" src="image.png" />
        </div>
        <div className="main-message-box-2">
          <div className="overlap-3">
            <div className="border-bottom-3" />
            <div className="text-wrapper-8">Thank You :)</div>
          </div>
        </div>
        <div className="frame-8">
          <img className="img" alt="Image" src="image-11-2.png" />
        </div>
        <div className="frame-9">
          <img className="image-2" alt="Image" src="image-11-3.png" />
        </div>
        <img className="outline-messages-2" alt="Outline messages" src="square-forward.png" />
        <img className="outline-messages-3" alt="Outline messages" src="square-forward-2.png" />
        <img className="outline-messages-4" alt="Outline messages" src="square-forward-3.png" />
        <div className="search">
          <div className="overlap-4">
            <div className="text-wrapper-9">Search</div>
            <img className="search-2" alt="Search" src="search-1.svg" />
          </div>
        </div>
        <img className="bold-duotone-2" alt="Bold duotone" src="trash-bin-2.png" />
        <img className="bold-duotone-3" alt="Bold duotone" src="danger-triangle.png" />
      </div>
    </div>
  );
};

export default Chatbot