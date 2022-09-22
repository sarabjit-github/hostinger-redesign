import React from "react";
import "./Scss/services.css";
import freeSSL from "../../img/free-ssl.svg";
import accessMg from "../../img/access-management.svg";
import eComOpt from "../../img/ecommerce.svg";
import freeMigration from "../../img/free-migration.svg";
import backups from "../../img/backups.svg";
import ddos from "../../img/ddos.svg";
import php from "../../img/php.svg";
import wordpressPlugin from "../../img/litespeed-wp.svg";
import wordpressInstall from "../../img/litespeed-wp.svg";
import techSupport from "../../img/wp-installation.svg";
import scriptInstall from "../../img/script-installer.svg";
import uptimeGt from "../../img/uptime-guarantee.svg";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section className="section mid-sec">
      <h1 className="sec-heading">
        Our <span>Services</span> Include
      </h1>
      <div className="services-con">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m13 12c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h8.5488c-.117-.304-.22-.6222-.3027-.9551-.0828-.3329-.1465-.6804-.1875-1.0449h-8.0586v-8h14 1 1v-6c0-1.105-.895-2-2-2zm0 2h14v4h-14zm2 1c-.2652 0-.5196.1054-.7071.2929s-.2929.4419-.2929.7071.1054.5196.2929.7071.4419.2929.7071.2929.5196-.1054.7071-.2929.2929-.4419.2929-.7071-.1054-.5196-.2929-.7071-.4419-.2929-.7071-.2929zm3 0c-.2652 0-.5196.1054-.7071.2929s-.2929.4419-.2929.7071.1054.5196.2929.7071.4419.2929.7071.2929.5196-.1054.7071-.2929.2929-.4419.2929-.7071-.1054-.5196-.2929-.7071-.4419-.2929-.7071-.2929zm3 0v2h4v-2z" />
                <path d="m23 24 4.5-2 4.5 2v3c0 3.915-3.22 5.743-4.5 6-1.28-.257-4.5-2.085-4.5-6z" />
              </g>
            </svg>
          </div>
          <h3>Free SSL</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m15 12c-2.1973 0-4 1.8027-4 4 0 1.8503 1.2842 3.4056 3 3.8555v9.1445c0 .5523.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2v-2h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1v-4.1445c1.7158-.4499 3-2.0052 3-3.8555 0-2.1973-1.8027-4-4-4zm0 2c1.1164 0 2 .8836 2 2s-.8836 2-2 2-2-.8836-2-2 .8836-2 2-2z" />
                <g clipRule="evenodd" fillRule="evenodd">
                  <path d="m21 19c0 .5523.4477 1 1 1h8c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1h-8c-.5523 0-1 .4477-1 1zm2-2c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1z" />
                  <path d="m22 22c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1h8c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1zm1 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1z" />
                </g>
              </g>
            </svg>
          </div>
          <h3>Access Management</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m31 12-5.3008.8008 1.543 1.543-3.0645 3.0644-1.6093-1.5078-4.0762 4.1777-1.4844-1.4843-4.7051 4.6093 1.4004 1.4278 3.2891-3.2247 1.5156 1.5157 4.1231-4.2227 1.5918 1.4922 4.4335-4.4336 1.543 1.543zm-3 8v11h2v-11zm-4 2v9h2v-9zm-4 2v7h2v-7zm-4 2v5h2v-5zm-4 2v3h2v-3z" />
                <path d="m28 20v11h2v-11zm-4 2v9h2v-9zm-4 2v7h2v-7zm-4 2v5h2v-5zm-4 2v3h2v-3z" />
              </g>
            </svg>
          </div>
          <h3>eCommerce Optimization</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m29.3476 12.0106c-.1397-.0153-.2842-.0145-.4297.0058-2.1711.3052-7.2154 1.1384-12.2188 6.9824h-2.6425l-2.6758 2.7852c-.372.372-.4833.9271-.2813 1.4141.201.487.6722.8007 1.1992.8007h2.2696l.1035.1035c-.2732.3445-.4277.7089-.582 1.1094-.1881.4879-.3446 1.0191-.4746 1.5196-.2601 1.0008-.4141 1.8925-.4141 1.8925l-.2481 1.4043 1.4043-.248s.8918-.1541 1.8926-.4141c.5004-.13 1.0317-.2865 1.5196-.4746.4005-.1543.7648-.3088 1.1093-.582l.1035.1035v2.2695c0 .527.3138.9992.8008 1.1992.165.069.3369.0997.5059.0997.331 0 .651-.1227.875-.3477l2.8183-2.5684v-2.7832c5.8441-5.0033 6.6773-10.0476 6.9825-12.2187.1425-1.0185-.6395-1.9458-1.6172-2.0527zm-.4121 2.0351c-.3572 2.5432-1.1624 7.535-8.8282 12.6641l-3.8359-3.836c5.1291-7.6658 10.1209-8.4709 12.6641-8.8281zm-12.8047 11.5156 1.289 1.2891c-.107.0566-.222.1183-.3711.1758-.3748.1445-.848.2842-1.3027.4023-.13.0338-.1236.0248-.248.0547.0299-.1244.0209-.118.0547-.248.1181-.4547.2578-.9279.4023-1.3028.0575-.149.1191-.264.1758-.3711z" />
                <path d="m23.2753 18.2917c.1876-.1876.4419-.2929.7071-.2929s.5196.1053.7071.2929c.1876.1875.2929.4419.2929.7071s-.1053.5195-.2929.7071c-.1875.1875-.4419.2929-.7071.2929s-.5195-.1054-.7071-.2929c-.1875-.1876-.2929-.4419-.2929-.7071s.1054-.5196.2929-.7071z" />
                <path d="m20.2753 21.2917c.1876-.1876.4419-.2929.7071-.2929s.5196.1053.7071.2929c.1876.1875.2929.4419.2929.7071s-.1053.5195-.2929.7071c-.1875.1875-.4419.2929-.7071.2929s-.5195-.1054-.7071-.2929c-.1875-.1876-.2929-.4419-.2929-.7071s.1054-.5196.2929-.7071z" />
              </g>
            </svg>
          </div>
          <h3>Free Migration</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m12 13c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1zm2 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2 11c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1zm2 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                <path
                  clipRule="evenodd"
                  d="m12 19c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1zm2 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <h3>Automated backups</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m30.7125 21.3811-2.7982-.6727-.4574-.1883-12.8339.1076v6.1883l16.1164.0269z"
                fill="#fff"
              />
              <g fill="none">
                <path d="m25.493 26.251c.1346-.5112.0808-.9686-.1614-1.3184-.2152-.3229-.5919-.5112-1.0493-.5112l-8.6636-.1076c-.0538 0-.1076-.0269-.1345-.0807s-.0269-.1077-.0269-.1615c.0269-.0807.1076-.1614.1883-.1614l8.7443-.1076c1.0493-.0538 2.1525-.8879 2.556-1.9103l.5112-1.2915c.0269-.0538.0269-.1076.0269-.1614-.565-2.556-2.825-4.4394-5.5425-4.4394-2.5022 0-4.6277 1.6143-5.3811 3.8475-.4843-.3767-1.13-.565-1.8026-.4843-1.2108.1076-2.1525 1.0762-2.287 2.2869-.0269.3229 0 .6189.0538.8879-1.9641.0538-3.5246 1.6682-3.5246 3.6323 0 .1883.02691.3497.02691.5381 0 .0807.08071.1345.16143.1345h15.98186c.0807 0 .1883-.0538.2152-.1614z" />
                <path d="m28.2373 20.6815c-.0807 0-.1614 0-.2421 0-.0538 0-.1076.0538-.1346.1076l-.3497 1.1839c-.1346.5112-.0807.9686.1614 1.3183.2153.3229.5919.5113 1.0493.5113l1.8565.1076c.0538 0 .1076.0269.1345.0807s.0269.1076.0269.1614c-.0269.0807-.1076.1615-.1883.1615l-1.9103.1076c-1.0493.0538-2.1524.8879-2.556 1.9103l-.1345.3497c-.0269.0538.0269.1346.1076.1346h6.5918c.0807 0 .1614-.0538.1614-.1346.1077-.4035.1884-.834.1884-1.2914-.0269-2.583-2.1524-4.7085-4.7623-4.7085z" />
              </g>
            </svg>
          </div>
          <h3>DDoS Protection</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m12 14c-1.0931 0-2 .9069-2 2v11c0 1.0931.9069 2 2 2h18c1.0931 0 2-.9069 2-2v-11c0-1.0931-.9069-2-2-2zm0 2h18v11h-18z" />
                <path d="m16 19v5h1v-2h.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5zm4 0v2 1 2h1v-2h1v2h1v-2-1-2h-1v2h-1v-2zm4 0v5h1v-2h.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5zm-7 1h.5c.276 0 .5.224.5.5s-.224.5-.5.5h-.5zm8 0h.5c.276 0 .5.224.5.5s-.224.5-.5.5h-.5z" />
              </g>
            </svg>
          </div>
          <h3>PHP Speed Boost</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m20.9292 12c-4.9271 0-8.9292 4.0031-8.9292 8.9292 0 4.9271 4.0031 8.9302 8.9292 8.9302 4.9271 0 8.9302-4.0031 8.9302-8.9302s-4.0031-8.9292-8.9302-8.9292zm5.0073 3.2896c.7115.6319 1.2993 1.3906 1.7333 2.2375.0156.1719.0312.3333.0312.5146 0 .7791-.1437 1.6531-.5833 2.7479l-2.2812 6.5958c-.448.2717-.9227.4965-1.4167.6709v-.0053l-2.3573-6.4572-2.2594 6.5791c-.4401-.1288-.8676-.2975-1.2771-.5041l-3.5416-9.7136c.1875-.4292.4073-.8427.6708-1.2344.1281.0052.2573.0104.3646.0104.8 0 2.0448-.0958 2.0448-.0958.4135-.0271.4614.5792.0479.6271 0 0-.4125.049-.875.076l2.7854 8.2959 1.6802-5.0281-1.1916-3.274c-.4188-.0208-.8052-.0698-.8052-.0698-.4188-.026-.3646-.6542.0437-.6271 0 0 1.2656.0958 2.0177.0958.8042 0 2.0386-.0958 2.0386-.0958.4187-.0271.4677.5792.0541.6271 0 0-.4187.049-.8802.076l2.7688 8.2323.7677-2.5552c.3864-.9927.5854-1.8187.5854-2.4739 0-.9438-.3386-1.6042-.6333-2.1146-.3865-.6271-.7573-1.1646-.7573-1.7917 0-.6875.5104-1.3094 1.2239-1.3469z"
                fill="#673de6"
              />
            </svg>
          </div>
          <h3>LiteSpeed Cache Plugin</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m27.2615 29.2913-5.269-4.9809-.4425-.4183-.3242.5155-2.5815 4.1044-5.7948-15.6571 15.7391 5.9377-4.3514 2.5-.5741.3299.4744.4619 5.1626 5.0273z"
                fill="#673de6"
                stroke="#fff"
              />
            </svg>
          </div>
          <h3>One-Click WordPress Installation</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m13 12c-1.1 0-2 .9-2 2v12l3-3h3v3c0 1.1.9 2 2 2h9l3 3v-12c0-1.1-.9-2-2-2h-4v-3c0-1.1-.9-2-2-2zm0 2h10v7h-10zm12 5h4v7h-10v-3h4c1.1 0 2-.9 2-2z" />
                <path
                  clipRule="evenodd"
                  d="m13 12c-1.1 0-2 .9-2 2v12l3-3h1 2 2 4c1.1 0 2-.9 2-2v-2-2-3c0-1.1-.9-2-2-2zm0 2h10v7h-10z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <h3>24/7/365 Tech Support</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m11 15v14c0 1.1.9 2 2 2h14v-2h-14v-14z" />
                <path
                  clipRule="evenodd"
                  d="m17 11c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2h-4-6zm-.0001 1.9999h2v8l3-1.5 3 1.5v-8h4v12h-12zm4 0h2v4.7637l-.1055-.0527-.8945-.4473-.8945.4473-.1055.0527z"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <h3>Auto Script Installer</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
          viewport={{ once: true }}
          className="service"
        >
          <div>
            <svg
              fill="none"
              height="42"
              viewBox="0 0 42 42"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m17.8004 32.3-1.4-3.3h-3.5l3-5.2 1.7 1-1.3 2.2c.7 0 1.4.4 1.7 1l2-3.4 1.7 1z" />
                <path d="m24.0996 32.3-4-6.6 1.7-1 2 3.4c.4-.6 1-1 1.7-1l-1.3-2.2 1.7-1 3 5.2h-3.5z" />
                <path d="m21.0004 26.8c-1 0-1.8-.6-2.2-1.6 0-.1-.1-.1-.2-.2-.1 0-.1 0-.2 0-.8.5-1.9.5-2.7-.2-.8-.6-1-1.7-.6-2.6 0-.1 0-.2 0-.2 0 .1 0 0-.1 0-1-.1-1.7-.9-1.9-1.8s.3-1.9 1.2-2.4c.1-.1.1-.1.1-.2 0 0 0-.1-.1-.2-.7-.8-.8-1.8-.3-2.7s1.5-1.3 2.4-1.1c.1 0 .2 0 .2-.1 0 0 .1-.1.1-.2 0-1 .5-1.9 1.5-2.2.9-.3 1.9-.1 2.6.7.1.2.3.2.4 0 .6-.8 1.6-1.1 2.6-.7.9.3 1.5 1.2 1.5 2.2 0 .1 0 .2.1.2s.1.1.2.1c1-.2 1.9.2 2.4 1.1s.4 1.9-.3 2.6c-.1.1-.1.2-.1.2 0 .1 0 .1.1.2.9.5 1.3 1.4 1.2 2.4s-.9 1.8-1.8 1.9c-.1 0-.2.1-.2.1 0 .1-.1.1 0 .2.4.9.1 1.9-.6 2.6-.8.6-1.8.7-2.7.2-.1-.1-.2 0-.2 0s-.1.1-.2.2c-.4.9-1.2 1.5-2.2 1.5zm-2.4-3.7c.3 0 .5 0 .8.1.7.2 1.2.8 1.4 1.4.1.2.4.2.5 0 .2-.7.7-1.2 1.4-1.4s1.4-.2 2 .2c.1.1.2.1.3 0s.1-.2.1-.3c-.3-.6-.2-1.4.1-2 .4-.6 1-1 1.6-1.1.1 0 .2-.1.2-.2s0-.2-.1-.3c-.6-.3-1-.9-1.2-1.6-.1-.7.1-1.4.5-1.9.1-.1.1-.2 0-.3s-.2-.2-.3-.1c-.7.1-1.4 0-1.9-.5s-.8-1.1-.8-1.8c0-.1-.1-.2-.2-.3-.1 0-.2 0-.3.1-.9 1.1-2.7 1.1-3.6 0 0-.1-.1-.1-.2-.1s-.2.1-.2.3c0 .7-.3 1.4-.8 1.8s-1.2.6-1.9.5c-.1 0-.2 0-.3.1 0 .1 0 .2.1.3.5.5.7 1.2.6 1.9s-.5 1.3-1.2 1.6c-.2.1-.2.2-.2.3s.1.2.2.2c.7.1 1.3.5 1.7 1.1s.4 1.3.1 2c0 .1 0 .2.1.3s.2.1.3 0c.4-.2.8-.3 1.2-.3z" />
                <path d="m17.8008 18.9 2.7 2.7 3.7-3.7-1.4-1.4-2.3 2.3-1.3-1.3z" />
              </g>
            </svg>
          </div>
          <h3>99.9% Uptime Guarantee</h3>
        </motion.div>
      </div>
    </section>
  );
};
