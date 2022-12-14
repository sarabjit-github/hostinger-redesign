import React, { useEffect, useState } from "react";
import "./Scss/hero.css";
import bigIllus from "../../img/big-illustration.svg";
import tickImg from "../../img/tick.svg";
import bestIcon from "../../img/best.svg";
import settingIcon from "../../img/Settings.svg";
import { motion } from "framer-motion";

export const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let remainingTime = () => {
    let offerEndDate = new Date("2022 10 7");
    let nowDate = new Date();
    let remainder = offerEndDate - nowDate; // This return value in milliseconds
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let remainingDays = Math.round(remainder / day);
    let remainingHours = 24 - nowDate.getHours();
    let remainingMinutes = 60 - nowDate.getMinutes();
    let remainingSeconds = 60 - nowDate.getSeconds();
    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  };
  useEffect(() => {
    setInterval(remainingTime, 100);
  }, []);

  return (
    <section className="hero section">
      <div className="hero-con">
        {/* Animation */}
        <div
          className="left"
        >
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: "3s" }}
            className="hero-heading"
          >
            <h1>
              Savings to Set Your Website in Motion{" "}
              <span>
                ₹149/<span>mo</span>
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: "3s" }}
            className="hero-txt"
          >
            <p>
              Get things moving with a free domain, lifetime SSL, and DDoS
              protection included with a four-year subscription.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: "3s" }}
            className="timer"
          >
            <div className="counter">
              <div className="count">
                <h2>{days}</h2>
                <p>days</p>
              </div>
              :
              <div className="count">
                <h2>{hours}</h2>
                <p>hours</p>
              </div>
              :
              <div className="count">
                <h2>{minutes}</h2>
                <p>minutes</p>
              </div>
              :
              <div className="count">
                <h2>{seconds}</h2>
                <p>seconds</p>
              </div>
            </div>
            <button className="primary-btn">Get Started</button>
          </motion.div>
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: "3s" }}
            className="hero-guarantee"
          >
            <img src={tickImg} alt="true" height="14" />
            <span>Get exclusive 30-day money-back guarantee</span>
          </motion.div>
        </div>
        {/* Animation */}
        <motion.div
          initial={{ y: "20%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: "3s", bounce: "0.4" }}
          className="right"
        >
          <div className="main-illus">
            {/* Animation */}
            <img src={bigIllus} alt="illustration" />
            {/* Animation */}
          </div>
        </motion.div>
      </div>
      {/* Animation */}
      <div className="Highlight best">
        <img src={bestIcon} alt="img" />
        <span>Best Web Hosting</span>
      </div>
      <div className="Highlight setting">
        <img src={settingIcon} alt="img" />
        <span>Easy to use and simple</span>
      </div>
    </section>
  );
};
