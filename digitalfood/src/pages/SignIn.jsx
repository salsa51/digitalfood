import React, { useState } from "react";
import { Checkbox } from '../components/Checkbox';
import { Facebook } from '../components/Facebook';
import '../styles/signin.css';
import { Link } from "react-router-dom";




export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password });
    };
    return (
    
        <div className="sign-in">
            
            <div className="div">
                <div className="overlap">
                    <img className="unsplash" alt="Unsplash" src="unsplash-4-jhdo54byg.png" />
                </div>
                <div className="overlap-group">
                    <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
                    <div className="text-wrapper">Digital Foods</div>
                </div>
                <form className="frame" onSubmit={handleSubmit}>
                    <div className="text-wrapper-2">Masuk Akun Digital Food</div>
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector.png" />
                                    <div className="text-wrapper-3"></div>
                                    <div>
                                    <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector-a.png" />
                                    <div className="text-wrapper-3"></div>
                                    <input 
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <div className="frame-6">
                                <Checkbox property1="checkbox" propertyCheckboxClassName="checkbox-instance" />
                                <div className="text-wrapper-4">Keep me logged in</div>
                            </div>
                            <button className="text-wrapper-5">Forgot password</button>
                        </div>
                    </div>
                    <div className="frame-7">
                        <div className="frame-8">
                            <img className="line" alt="Line" src="line-7.svg" />
                            <div className="text-wrapper-6">atau masuk dengan</div>
                            <img className="line" alt="Line" src="line-8.svg" />
                        </div>
                        <div className="frame-9">
                            <div className="frame-10">
                                <img className="image" alt="Image" src="image-26.png"  />
                                <button className="login-google">Login&nbsp;&nbsp;Google</button>
                            </div>
                            <div className="frame-10">
                                <Facebook className="img" alt="Image" src="Facebook.png"/>
                                <button className="login-facebook">Login&nbsp;&nbsp;Facebook</button>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <Link to="/" className="text-wrapper-7"> Masuk</Link>
                        </div>
                    </div>
                    <div className="frame-11">
                        <div className="text-wrapper-4">Belum punya akun?</div>
                        <Link to="/SignUP" className="text-wrapper-8"> Daftar</Link>
                    </div>
                </form>
            </div>
        </div>



    );
};



export default SignIn;