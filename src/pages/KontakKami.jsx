import React from "react";
import "../styles/kontak.css";

export const KontakKami = () => {
  return (
    <div className="kontak-kami">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="kontak">
            <div className="overlap-group">
              <img className="rectangle-instance" rectangle="rectangle.png" />
              <div className="frame-3">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="text-wrapper-3">Hubungi Kami</div>
                    <p className="p">
                      Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan kontak email atau nomor telepon
                      yang ada dibawah untuk hubungi kami.
                    </p>
                  </div>
                  <div className="frame-6">
                    <div className="text-wrapper-4">Kantor&nbsp;&nbsp;Digital Foods</div>
                    <div className="frame-5">
                      <div className="frame-7">
                        <LocationPin24Outline className="icon-instance-node" />
                        <p className="text-wrapper-5">
                          Jl. Raya Taman Tiara, Nggrekmas, Pagerwojo, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur
                          61219
                        </p>
                      </div>
                      <div className="frame-7">
                        <img className="icon-instance-node" alt="Ph whatsapp logo" src="ph-whatsapp-logo-light.svg" />
                        <div className="text-wrapper-6">111-222-333</div>
                      </div>
                      <div className="frame-7">
                        <Message24Outline className="icon-instance-node" />
                        <div className="text-wrapper-6">service@digitalfoods.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-6">
                    <div className="text-wrapper-4">Sosial Media</div>
                    <div className="frame-5">
                      <div className="frame-7">
                        <img className="vector" alt="Vector" src="vector.svg" />
                        <div className="text-wrapper-6">@digitalfoods</div>
                      </div>
                      <div className="frame-7">
                        <img className="ph-twitter-logo" alt="Ph twitter logo" src="ph-twitter-logo-light.svg" />
                        <div className="text-wrapper-7">@digitalfoods</div>
                      </div>
                      <div className="frame-7">
                        <Facebook24Outline className="icon-instance-node" />
                        <div className="text-wrapper-8">digitalfoods</div>
                      </div>
                    </div>
                  </div>
                  <img className="unsplash" alt="Unsplash" src="unsplash-l9naijlp354.png" />
                </div>
                <img className="line" alt="Line" src="line-2.svg" />
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="text-wrapper-3">Kontak kami melalui email</div>
                    <p className="text-wrapper-9">
                      Jika anda membutuhkan Informasi atau bantuan silahkan menggunakan kontak email dan tuliskan apa
                      yang anda ingin bertanya.
                    </p>
                  </div>
                  <div className="frame-10">
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Nama Lengkap Anda</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Nomor Ponsel</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-10">Alamat Email</div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-10">Pesan Anda</div>
                    </div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame-12">
                      <div className="text-wrapper-10">Kirim</div>
                    </div>
                  </div>
                </div>
              </div>
              <NavbarWeb
                buttonClassName="navbar-web-2"
                buttonClassNameOverride="navbar-web-2"
                className="navbar-web-instance"
                divClassName="design-component-instance-node"
                hasButton={false}
                logoipsum="2-2.svg"
              />
              <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
              <div className="text-wrapper-11">Digital Foods</div>
              <img className="unsplash-jx" alt="Unsplash jx" src="unsplash-jx-07bo1jus.png" />
              <img className="img" alt="Vector" src="image.svg" />
              <p className="hi-parto">
                <span className="span">Hi,</span>
                <span className="text-wrapper-12"> Parto</span>
              </p>
            </div>
          </div>
          <img className="group" alt="Group" src="group-102.png" />
        </div>
      </div>
    </div>
  );
};

export default KontakKami

