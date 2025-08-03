import React, { useState } from "react";
import "../components/Loginnum.css";
import Telegramimg from "../assest/telegram.png";
import { Link } from "react-router-dom";

const countries = [
  {name:"Andorra", code:"+376",flag:"an"},
  {name:"Argentina",code:"+54",flag:"arg"},
  {name:"Barbados",code:"+1246",flag:"bar"},
  {name:"Brazil",code:"+55",flag:"brz"},
  {name:"Croatia",code:"+385",flag:"cro"},
  {name:"Mexico",code:"+52",flag:"mex"},
  {name:"Portual",code:"+351",flag:"por"},
  { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  {name:"Qatar",code:"+381",flag:"qat"},
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  {name:"Wallis",code:"+681",flag:"wla"},
  { name: "USA", code: "+1", flag: "🇺🇸" },

];

const Loginnum = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);

    // if (value.length === 9) {
    //   const fullNumber = selectedCountry.code + value;
    //   window.location.href = `https://t.me/${fullNumber}`;
    // }
  };
 

  return (
    <div className="loginnumCont">
      <img src={Telegramimg} alt="Telegram Logo" />
      <h2>Sign In To Telegram</h2>
      <p>Please confirm your country code and enter your phone number.</p>

      <div className="login-wrapper">
        <div className="dropdown" onClick={toggleDropdown}>
          <fieldset>
            <legend>Country</legend>
            <input
              type="text"
              value={selectedCountry.name}
              readOnly
              className="country-input"
            />
            <span className="arrow">&#9662;</span>
          </fieldset>

          {showDropdown && (
            <div className="dropdown-menu">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="dropdown-item"
                  onClick={() => handleCountrySelect(country)}
                >
                  <span className="code">{country.code}</span>
                  <span>{country.name}</span>
                  <span className="flag">{country.flag}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <fieldset>
          <legend>Phone number</legend>
          <div className="phone-input-wrapper">
            <span className="prefix">{selectedCountry.code}</span>
            <input
              type="tel"
              placeholder=" --- -- --"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="phone-input"
            />
          </div>
        </fieldset>

        <button
          className="next-btn"
          onClick={() => {
            if (phoneNumber.length >= 7) {
              const full = selectedCountry.code + phoneNumber;
              window.location.href = `https://t.me/${full}`;
            } else {
              alert("Telefon raqam to‘liq emas");
            }
          }}
        >
          NEXT
        </button>
        <Link to="/app">
          <button className="next-demo-btn">Next Demo Mode</button>
        </Link>
        
        

        <Link to="/">
          <button className="qrcode">LOG IN by QR code</button>
        </Link>
      </div>
    </div>
  );
};

export default Loginnum;
