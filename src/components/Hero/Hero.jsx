import React, { useEffect, useState } from "react";
import "./Scss/hero.css";
import bigIllus from "../../img/big-illustration.svg";
import bigIllus2 from "../../img/big-illus3.svg";
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
        <motion.div
          // initial={{ y: "20%" }}
          // animate={{ y: 0 }}
          // transition={{ type: "spring", duration: "2s", }}
          className="left"
        >
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: "4s" }}
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
            transition={{ type: "spring", duration: "4s" }}
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
            transition={{ type: "spring", duration: "4s" }}
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
            transition={{ type: "spring", duration: "4s" }}
            className="hero-guarantee"
          >
            <img src={tickImg} alt="true" height="14" />
            <span>Get exclusive 30-day money-back guarantee</span>
          </motion.div>
        </motion.div>
        {/* Animation */}
        <div className="right">
          <div className="main-illus">
            {/* Animation */}
            <motion.img
              initial={{ x: "20%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: "4s", bounce: "0.3" }}
              src={bigIllus}
              alt="illustration"
            />
            {/* Animation */}
          </div>
        </div>
      </div>
      {/* Animation */}
      <motion.div
        initial={{ y: "70px" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: "2s", bounce: "0.3" }}
        className="Highlight best"
      >
        <img src={bestIcon} alt="img" />
        <span>Best Web Hosting</span>
      </motion.div>
      <motion.div
        initial={{ y: "100px", opacity: "0" }}
        animate={{ y: 0, opacity: "1" }}
        transition={{ type: "spring", duration: "4s", bounce: "0.1" }}
        className="Highlight setting"
      >
        <img src={settingIcon} alt="img" />
        <span>Easy to use and simple</span>
      </motion.div>
      {/* Animation */}
      {/* Side Illustrations */}
      {/* <div className="side-illus">
        <img src={bigIllus2} alt="Cloud Hosting" />
      </div> */}
    </section>
  );
};
