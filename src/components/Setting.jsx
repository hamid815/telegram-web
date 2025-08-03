import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import "./Setting.css"; 
import Profileimg from "../assest/myimg.png"
import { Link } from "react-router-dom";
const Setting = () => {


  return (
    <div className="setting-container">
      <div className="settingHead">
        <div>
          <Link to="/app">
            <i class='bx bx-left-arrow-alt'></i>
          </Link>
            <h2>Settings</h2>
        </div>
        <div>
            <i class='bx bx-pencil' ></i>
            <i class='bx bx-dots-vertical-rounded'></i>
        </div>
      </div>

      <div className="setProfile">
        <img src={Profileimg} alt="" />
        <h1>Profile Name</h1>
        <p>Profile Status</p>

        <div>
            <i class='bx bx-phone' ></i>
            <div>
                <h3>+998 016 37 84</h3>
                <p>Phone</p>
            </div>
        </div>
        

      </div>
      <div className="settingList">
        <h3><i class='bx bxs-bell'></i> Notifications and Sounds</h3>
        <h3><i class='bx bx-data'></i> Data and Storage</h3>
        <h3><i class='bx bxs-lock-alt'></i> Privacy and Security</h3>
        <h3><i class='bx bx-cog' ></i> General Settings</h3>
        <h3><i class='bx bx-folder'></i> Chat Folders</h3>
        <h3><i class='bx bx-sticker' ></i> Stickers and Emoji</h3>
        <h3><i class='bx bx-devices' ></i> Devices</h3>
      </div>
    </div>
  );
};

export default Setting;
