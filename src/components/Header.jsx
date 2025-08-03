import React, { useState } from "react";
import "../components/Header.css";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Header = ({ setSearchTerm }) => {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="headerCont">
        <button onClick={handleMenuClick}>
          <i className="bx bx-menu"></i>
        </button>
        <div>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <i className="bx bx-search search-icon"></i>
        </div>
      </div>

      {active && (
        <div className="overlay" onClick={() => setActive(false)}>
          <div className="menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <i
                class="bx bx-x iks  bx-rotate-90"
                onClick={() => setActive(false)}
              ></i>

              <li>
                <i className="bx bx-user-circle"></i> Profile
              </li>

              <li>
                <Link to="/">
                  <i className="bx bx-plus"></i> Add Account
                </Link>
              </li>
              <li>
                <i className="bx bxs-save"></i> Saved Message
              </li>
              <li>
                <i className="bx bx-archive-in"></i> Archive
              </li>
              <li>
                <i className="bx bxl-digitalocean"></i> My Stores
              </li>
              <li>
                <i className="bx bx-user"></i> Contact
              </li>
              <li>
                <i className="bx bx-wallet"></i> Wallet
              </li>
              <li>
                <Link to="/setting">
                  <i className="bx bx-cog"></i> Settings
                </Link>
              </li>

              <li className="mor-wrapper">
                <div className="mor">
                  More <i className="bx bx-chevron-right"></i>
                </div>
                <div className="mor-modal">
                  <ul>
                    <li>
                      <i className="bx bx-bell"></i> Notification
                    </li>
                    <li>
                      <i className="bx bx-palette"></i> Theme
                    </li>
                    <li>
                      <i className="bx bx-lock-alt"></i> Privacy and Security
                    </li>
                    <li>
                      <i className="bx bx-chat"></i> Chat Settings
                    </li>
                    <li>
                      <i className="bx bx-help-circle"></i> Help
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bx-log-out-circle"></i> Log Out
                      </Link>
                      
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
