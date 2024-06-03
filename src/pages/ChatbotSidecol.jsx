import React from "react";
import "./styles.chatbotsidecol.css";

export const ChatbotSidecol = () => {
  return (
    <div className="chatbot-sidecol">
      <div className="div">
        <div className="search">
          <div className="overlap-group">
            <div className="text-wrapper">Search</div>
            <img className="img" alt="Search" src="search-1.svg" />
          </div>
        </div>
        <div className="sidebar">
          <div className="frame">
            <div className="image-wrapper">
              <img className="image" alt="Image" src="parto.png" />
            </div>
            <div className="outline-essentional-wrapper">
              <img className="outline-essentional" alt="Outline essentional" src="hamburger-menu.png" />
            </div>
          </div>
        </div>
        <div className="outer">
          <div className="main-message-box">
            <div className="overlap-group-2">
              <p className="body">Type a new message here</p>
              <img className="emojis" alt="Emojis" src="emojis.png" />
              <img className="outline-messages" alt="Outline messages" src="paperclip.png" />
            </div>
            <img className="send" alt="Send" src="send.png" />
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
          <img className="image-2" alt="Image" src="image.png" />
        </div>
        <div className="frame-2">
          <img className="image-2" alt="Image" src="kartun.png" />
        </div>
        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="border-bottom-3" />
            <div className="text-wrapper-3">Thank You :)</div>
          </div>
        </div>
        <div className="frame-3">
          <img className="image-3" alt="Image" src="image-11-3.png" />
        </div>
        <img className="outline-messages-2" alt="Outline messages" src="square-forward.png" />
        <img className="outline-messages-3" alt="Outline messages" src="square-forward-2.png" />
        <img className="outline-messages-4" alt="Outline messages" src="square-forward-3.png" />
        <img className="bold-duotone" alt="Bold duotone" src="trash-bin-2.png" />
        <img className="bold-duotone-2" alt="Bold duotone" src="danger-triangle.png" />
      </div>
    </div>
  );
};

