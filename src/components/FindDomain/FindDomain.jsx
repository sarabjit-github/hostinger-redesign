import React, { useState } from "react";
import "./Scss/finddomain.css";
import searchIcon from "../../img/search-icon.svg";

export const FindDomain = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="find-domain mid-sec">
      <div className="section">
        <div className="left">
          <h1>Find the perfect domain name</h1>
          <p>
            Enter domain name of your choice and pick any extension name on the
            next step (choose between .in, .com, .online, .live, .store, .info
            and many more)
          </p>
        </div>
        <div className="right">
          <div className="search-bar">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Find perfect domain name"
            />
            <button title="Search Domain" disabled={searchValue ? false : true}>
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          <div className="fake-domain first">Hostinger.com</div>
          <div className="fake-domain two">thapatechnical.com</div>
          <div className="fake-domain third">thapaonlineclass.com</div>
          <div className="fake-domain fourth">sarabjitsingh.live</div>
          <div className="fake-domain five">mycompany.org</div>
          <div className="fake-domain six">internet.com</div>
        </div>
      </div>
    </section>
  );
};
