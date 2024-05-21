import React from 'react';
import { Frame } from '../components/Frame';
import { FrameWrapper } from '../components/FrameWrapper';
import '../styles/market.css';

export const MarketPlace = () => {
  return (
    <div className="market-place-semua">
      <div className="div-8">
        <div className="overlap">
          <div className="navbar-marketplace">
            <div className="frame-10">
              <div className="logoipsum" />
              <div className="frame-11">
                <div className="content">
                  <div className="left-part">
                    <div className="text">Search...</div>
                    <img className="keranjang" alt="keranjang" src="keranjang.svg" />
                    
                  </div>
                  <img className="chat" alt="chat" src="chat.svg" />
                </div>
              </div>
            </div>
            
            <img className="vector" alt="Vector" src="Vector-m.svg" />
            <p className="hi-parto">
              <span className="span">Hi,</span>
              <span className="text-wrapper-8"> Parto</span>
            </p>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="frame-14">
                      <div className="text-wrapper-9">Semua</div>
                    </div>
                    <div className="frame-15">
                      <div className="text-wrapper-10">Buah-Buahan</div>
                    </div>
                  </div>
                  <div className="frame-16">
                    <div className="frame-17">
                      <div className="frame-18">
                        <div className="text-wrapper-11">Kategori</div>
                      </div>
                    </div>
                    <div className="frame-17">
                      <div className="frame-18">
                        <div className="text-wrapper-11">Lokasi</div>
                      </div>
                    </div>
                  </div>
                  <img className="line" alt="Line" src="line-6.svg" />
                </div>
                <img className="line-2" alt="Line" src="line-1.svg" />
              </div>
              <div className="text-wrapper-12">Semua</div>
            </div>
          </div>
          <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
          <div className="text-wrapper-13">Digital Foods</div>
        </div>
        
        <p className="text-wrapper-14">
          Lorem ipsum dolor sit amet consectetur. Et id viverra non dolor. Sed adipiscing nulla et sed. In sit
          adipiscing id congue eros posuere semper odio orci. Maecenas blandit id viverra varius tellus. Amet enim
          turpis et sollicitudin vel bibendum pulvinar. Adipiscing pharetra libero in urna accumsan. Congue cursus nam
          maecenas eu quam platea porttitor nisi.
        </p>
        <div className="overlap-2">
          <div className="frame-19">
            <div className="ellipse" />
            <div className="ellipse" />
            <div className="ellipse" />
            <div className="ellipse" />
          </div>
          <img className="unsplash" alt="Unsplash" src="unsplash_-YHSwy6uqvk.png" />
        </div>
        <div className="chiller-frozen">Chiller &amp; frozen</div>
        <div className="text-wrapper-15">Buah-buahan dan sayuran</div>
        <div className="text-wrapper-16">Barang Chiller</div>


        <div className="frame-20">
          <div className="frame-21">
          <Frame
              className="frame-535"
              src="bayam.svg"
            />
            <Frame
              className="frame-535"
              src="pakchoi.svg"
            />
            <Frame
              className="frame-535"
              src="kentang.svg"
            />
            <Frame
              className="frame-535"
              src="bawang.svg"
            />
            <Frame
              className="frame-535"
              src="tomat.svg"
            />
          </div>
          </div>

          <div className="frame-22">
          <div className="frame-21">
            <Frame
              className="frame-535"
              src="paprika.svg"
            />
            <Frame
              className="frame-535-instance"
              src="jahe.svg"
            />
            <Frame
              className="frame-535"
              src="seledri.svg"
            />
            <Frame
              className="frame-535"
              src="cabai.svg"
            />
            <Frame
              className="frame-535"
              src="pisang.svg"
             />
             </div>
          </div>

          <div className="frame-23">
          <div className="frame-24">
            <div className="frame-25">
              <FrameWrapper
                className="frame-557"
                src="selada.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="brokoli.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="mentimun.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="labu.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="kubis.svg"
              />
            </div>
            </div>

            <div className="frame-21">
              <FrameWrapper
                className="frame-557"
                src="pepaya.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="kol.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="artichoke.svg"
              />
              <FrameWrapper
                className="frame-557"
                src="sawi.svg"
                />
              <FrameWrapper
                className="frame-557"
                src="kentan.svg"
              />
            </div>
            </div>

        </div>
      </div>
  );
};

export default MarketPlace
