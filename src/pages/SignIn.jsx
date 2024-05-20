import React from 'react';
import { Checkbox } from '../components/Checkbox';
import { Facebook } from '../components/Facebook';
import '../styles/signin.css';



export const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="div">
                <div className="overlap">
                    <img className="unsplash" alt="Unsplash" src="unsplash-4-jhdo54byg.png" />
                </div>
                <div className="overlap-group">
                    <img className="img" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
                    <div className="text-wrapper">Digital Foods</div>
                </div>
                <div className="frame">
                    <div className="text-wrapper-2">Masuk Akun Digital Food</div>
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector.png" />
                                    <div className="text-wrapper-3">Email</div>
                                </div>
                            </div>
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector-a.png" />
                                    <div className="text-wrapper-3">Password</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <div className="frame-6">
                                <Checkbox property1="checkbox" propertyCheckboxClassName="checkbox-instance" />
                                <div className="text-wrapper-4">Keep me logged in</div>
                            </div>
                            <div className="text-wrapper-5">Forgot password</div>
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
                                <div className="login-google">Login&nbsp;&nbsp;Google</div>
                            </div>
                            <div className="frame-10">
                                <Facebook className="img" alt="Image" src="Facebook.png"/>
                                <div className="login-facebook">Login&nbsp;&nbsp;Facebook</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-7">Masuk</div>
                        </div>
                    </div>
                    <div className="frame-11">
                        <div className="text-wrapper-4">Belum punya akun?</div>
                        <div className="text-wrapper-8">Daftar</div>
                    </div>
                </div>
            </div>
        </div>



    );
};



export default SignIn;