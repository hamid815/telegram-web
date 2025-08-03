import React, { useState, useRef, useEffect } from "react";

import Qrcode from "../assest/qrcode.png"
import "../components/Login.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
{/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link> */}
const Login = () => {
      useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

    return (
        <div className="login-container">
            <div data-aos="zoom-in">
            <img src={Qrcode} alt="login qr code" />

            </div>
            <h2>Log in to Telegram by QR Code</h2>
            <div className="loginmiss">
                <p>1.Open Telegram on your phone</p>
                <p>2.Go to <strong>Settings  Devices  Link Desktop Device</strong></p>
                <p>3.Point your phone at this screen to confirm login</p>
            </div>
            <Link to="/loginnum">
                <button>LOG IN by PHONE NUMBER</button>
            </Link>
        </div>
    );
};

export default Login;