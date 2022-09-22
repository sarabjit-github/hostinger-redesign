import React from "react";
import "./Scss/controlpanel.css";
import userImg from "../../img/user.svg";
import graphImg from "../../img/graph.svg";
import wordpressLogo from "../../img/word-logo.svg";
import hostingerVideo from "../../img/hostingerPanel-video.mp4";
import { motion } from "framer-motion";

export const ControlPanel = () => {
  return (
    <section className="mid-sec control-sec" id="control-sec">
      <h1>User-Friendly Control Panel</h1>
      <div className="panel-con">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="panel-img"
        >
          <video
            autoPlay
            muted
          >
            <source src={hostingerVideo} type="video/mp4" />
          </video>
        </motion.div>
        <div className="panel-content">
          <motion.div
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            viewport={{ once: true }}
            className="p-content"
          >
            <div className="pc-head">
              <img src={userImg} alt="image" />
              <h1>Ease of use</h1>
            </div>
            <div className="pc-bottom">
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            viewport={{ once: true }}
            className="p-content"
          >
            <div className="pc-head">
              <img src={graphImg} alt="image" />
              <h1>Powerful</h1>
            </div>
            <div className="pc-bottom">
              <p>
                A wide variety of tools to satisfy advanced user and website
                developer needs.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            viewport={{ once: true }}
            className="p-content"
          >
            <div className="pc-head">
              <img src={wordpressLogo} alt="image" />
              <h1>WordPress Optimized</h1>
            </div>
            <div className="pc-bottom">
              <p>
                Get more speed, better SEO, visitor retention and conversions
                with our custom-built WP optimization stack and LiteSpeed cache.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
