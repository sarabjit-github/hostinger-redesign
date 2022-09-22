import React from "react";
import "./Scss/illussection.css";
import easyUseIllus from "../../img/undraw-illus-1.png";
import fastLoadingIllus from "../../img/fast_loading-illus.png";
import wordpressIllus from "../../img/wordpress-illustration.png";
import scaleIllus from "../../img/large-scale-illus.png";
import supportIllus from "../../img/active_support-illus.png";
import { motion } from "framer-motion";

export const IllusSection = () => {
  return (
    <section className="section mid-sec">
      <div className="illus-container first-illus">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="left"
        >
          <h3 className="sm-heading">Easy to use and simple</h3>
          <h1>Easy to set up</h1>
          <p>
            Getting your website live is as simple as a click of a button.
            Everything you need - provided in a clear way.
          </p>
          <button className="primary-btn">Learn more</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="right"
        >
          <img src={easyUseIllus} alt="Easy to use and simple" />
        </motion.div>
      </div>
      <div className="illus-container second-illus">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="left"
        >
          <h3 className="sm-heading">Performance and speed</h3>
          <h1>Lightning-fast websites</h1>
          <p>
            Website speed can slow or grow your business. Delight your visitors
            with a fast-loading and optimized website.
          </p>
          <button className="primary-btn">Learn more</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="right"
        >
          <img src={fastLoadingIllus} alt="Performance and speed" />
        </motion.div>
      </div>
      <div className="illus-container third-illus">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="left"
        >
          <h3 className="sm-heading">Great wordpress experience</h3>
          <h1>WordPress made easy</h1>
          <p>
            Start your website with an automatic 1-click WordPress installation.
            The backend is powered by LiteSpeed caching and advanced
            optimization to ensure your websites are fast, reliable and secure.
          </p>
          <button className="primary-btn">Learn more</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="right"
        >
          <img src={wordpressIllus} alt="Great wordpress experience" />
        </motion.div>
      </div>
      <div className="illus-container fourth-illus">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="left"
        >
          <h3 className="sm-heading">Professional and hands-on</h3>
          <h1>24/7 Support</h1>
          <p>
            Our team of experts will solve technical issues to get your websites
            up and running. Anytime.
          </p>
          <button className="primary-btn">Learn more</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="right"
        >
          <img src={supportIllus} alt="Professional and hands-on" />
        </motion.div>
      </div>
      <div className="illus-container five-illus">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="left"
        >
          <h3 className="sm-heading">From micro to large-scale</h3>
          <h1>From micro to large-scale</h1>
          <p>
            Different projects require different technologies. Pick a plan that
            matches your current needs, then upgrade and scale as your website
            grows.
          </p>
          <button className="primary-btn">Learn more</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className="right"
        >
          <img src={scaleIllus} alt="From micro to large-scale" />
        </motion.div>
      </div>
    </section>
  );
};
