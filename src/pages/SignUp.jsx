import React, { useState } from "react";
import { Facebook } from "../components/Facebook";
import '../styles/signup.css';
import { Link } from "react-router-dom";


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Kata sandi tidak cocok!");
            return;
        }
        console.log({ email, address, password });
    };

    return (
        <div className="sign-up-pengelolah">
            <div className="div">
                <div className="overlap">
                    <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
                    <div className="text-wrapper">Digital Foods</div>
                </div>
                <div className="overlap-group">
                    <form className="frame" onSubmit={handleSubmit}>
                        <div className="frame-2">
                            <p className="p">Selamat Datang di Digital Foods</p>
                        </div>
                        <br/>
                        <div className="frame-3">
                            <div className="text-wrapper-2">Daftar dengan menggunakan</div>
                            <br />
            
                            <br/>
                            
                        </div>
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="text-wrapper-3">Email*</div>
                                <div className="div-wrapper">
                                    <input 
                                        type="email"
                                        className="text-wrapper-4"
                                        placeholder="Masukan Email Anda"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="frame-wrapper">
                                <div className="frame-8">
                                    <div className="frame-6">
                                        <div className="text-wrapper-5">Alamat Lengkap</div>
                                        <div className="frame-9">
                                            <input 
                                                type="text"
                                                className="text-wrapper-6"
                                                placeholder="Masukan nama dan nomor jalan, gedung atau ruko"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-7">
                            <div className="text-wrapper-3">Kata Sandi*</div>
                            <div className="frame-10">
                                <input 
                                    type="password"
                                    className="text-wrapper-4"
                                    placeholder="Masukan Kata Sandi"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-7">
                            <div className="text-wrapper-3">Konfirmasi Kata Sandi*</div>
                            <div className="frame-10">
                                <input 
                                    type="password"
                                    className="text-wrapper-4"
                                    placeholder="Konfirmasi Kata Sandi"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="frame-7">
                            <p className="dengan-mendaftar">
                                <span className="span">
                                    Dengan mendaftar, Anda bertanggung jawab atas akun tersebut sesuai dengan Syarat, Ketentuan &amp;
                                    Kebijakan Privasi.
                                </span>
                            </p>
                        </div>
                        <div className="frame-11">
                            <Link to="/SignIn" className="text-wrapper-7"> Daftar</Link>
                        </div>
                        <div className="frame-7">
                            <p className="sudah-memiliki-akun">
                                <span className="text-wrapper-8">Sudah memiliki akun? </span>
            
                                <Link to="/SignIn" className="text-wrapper-9"> Masuk Sekarang</Link>
                            </p>
                        </div>
                    </form>
                    <div className="frame-12">
                        <img className="image" alt="Image" src="image-26.png" />
                        <button className="login-google-2">Login&nbsp;&nbsp;Google</button>
                    </div>
                    <div className="frame-13">
                        <Facebook className="image" alt="Image" src="Facebook.png"/>
                        <button className="login-facebook-2">Login&nbsp;&nbsp;Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;