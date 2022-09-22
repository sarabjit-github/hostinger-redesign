import React from "react";
import "./Scss/partners.css";
import cloudflareLogo from "../../img/cloudflare-logo.svg";
import litespeedLogo from "../../img/litespeed-logo.svg";
import wordpressLogo from "../../img/wordpress-logo.svg";

export const Partners = () => {
  return (
    <section className="mid-sec section">
      {/* <h1 className="sec-heading"><span>Our</span> partners</h1> */}
      <div className="partner-con">
        <div>
          <img src={wordpressLogo} alt="wordpress" />
        </div>
        <div>
          <img src={litespeedLogo} alt="Litespeed" />
        </div>
        <div>
          <img src={cloudflareLogo} alt="Cloudflare" />
        </div>
      </div>
    </section>
  );
};
