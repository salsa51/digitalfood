import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pastikan untuk mengimpor Link dari React Router

const LandingPage = () => {
  const [showItems, setShowItems] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  
  const bahan = [
    {
      id: 1,
      img: "/public/jahe.svg",
      bahan: "1",
      desc: "Jahe adalah bahan makanan yang sangat serbaguna dan digunakan dalam berbagai masakan di seluruh dunia karena rasa dan aromanya yang khas",
    },
    {
      id: 2,
      img: "/public/bawang.svg",
      bahan: "2",
      desc: "Bawang adalah bahan dasar yang sangat umum dalam masakan di berbagai budaya karena memberikan rasa dan aroma yang khas",
    },
    {
      id: 3,
      img: "/public/kentang.svg",
      bahan: "3",
      desc: "Kentang (Solanum tuberosum) adalah salah satu bahan makanan pokok yang sangat serbaguna dan digunakan di berbagai masakan di seluruh dunia",
    },
    {
      id: 4,
      img: "/public/cabai.svg",
      bahan: "4",
      desc: "Cabai adalah bahan masakan yang sangat populer dan digunakan di berbagai masakan di seluruh dunia karena memberikan rasa pedas yang khas.",
    },
    {
      id: 5,
      img: "/public/tomat.svg",
      bahan: "5",
      desc: "Tomat adalah bahan masakan yang serbaguna, digunakan dalam berbagai hidangan dari salad hingga saus, serta memberikan rasa asam yang khas.",
    },
    {
      id: 6,
      img: "/public/pakchoi.svg",
      bahan: "6",
      desc: "Pakchoi (bok choy) adalah jenis sayuran hijau yang sering digunakan dalam masakan Asia, khususnya masakan Tiongkok.",
    },
    {
      id: 7,
      img: "/public/bayam.svg",
      bahan: "7",
      desc: "Bayam adalah sayuran hijau yang kaya akan nutrisi dan digunakan dalam berbagai hidangan, mulai dari salad hingga tumisan, karena rasanya yang lezat dan manfaat kesehatannya.",
    },
    {
      id: 8,
      img: "/public/seledri.svg",
      bahan: "8",
      desc: "Seledri (Apium graveolens) adalah tumbuhan yang termasuk dalam keluarga Apiaceae, yang juga dikenal sebagai keluarga wortel.",
    },
  ];

  const handleBelanjaClick = () => {
    setShowItems(!showItems);
  };

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  return (
    <div className="font-archivo">
      <div className="banner">
        <img src="/public/banner.svg" alt="banner" className="w-full" />
      </div>
      <div className="flex flex-col items-center gap-20 my-10">
        <h1 className="text-bold text-[64px] text-center text-shadow-white">
          Membantu <br /> menemukan bahan <br /> untuk restoran anda
        </h1>
        <button
          onClick={handleBelanjaClick}
          className="w-[190px] h-[44px] text-[16px] font-normal text-white bg-black rounded-[5px]"
        >
          Belanja Sekarang
        </button>
      </div>

      {showItems && (
        <div className="my-20 text-center justify-center mx-20">
          <h1 className="text-[40px] font-bold">Daftar Item</h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-y-7">
            {bahan.map((item) => (
              <div className="flex flex-col items-center" key={item.id}>
                <img src={item.img} alt="bahan" className="w-[279px] h-[256px]" />
                <p className="text-[24px] font-bold">bahan {item.bahan}</p>
                <p className="text-[16px] opacity-60">{item.desc}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-[190px] h-[44px] text-[16px] font-normal text-white bg-black rounded-[5px] mt-4"
                >
                  Tambahkan ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="sm:my-10 md:mt-20 lg:my-40 w-full h-[440px] bg-[#FFE0B5] shadow-large-top-bottom">
        <div className="flex flex-col items-center py-10">
          <h1 className="text-[40px] font-bold">Pencapaian Kami</h1>
          <p className="text-[16px] opacity-60 pt-5">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat
          </p>
          <div className="w-full flex flex-col gap-10 sm:flex-row sm:gap-32 justify-center text-center mt-10">
            <div className="left">
              <h2 className="text-[32px] font-bold text-[#20922B]">896</h2>
              <p className="text-[24px] font-bold">Pengguna Aktif</p>
            </div>
            <div className="right">
              <h2 className="text-[32px] font-bold text-[#20922B]">80.976kg</h2>
              <p className="text-[24px] font-bold">Bahan Terjual</p>
            </div>
          </div>
          <Link to="/tentang-kami">
            <button className="w-[161px] h-[44px] bg-[#1E564D] rounded-[5px] text-white text-[16px] font-normal mt-10">
              Tentang Kami
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2>Keranjang Belanja</h2>
        <ul>
          {shoppingCart.map((item, index) => (
            <li key={index}>{item.bahan}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
