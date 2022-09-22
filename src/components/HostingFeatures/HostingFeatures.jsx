import React, { useState } from "react";
import "./Scss/hostingfeatures.css";
import tickImg from "../../img/tick.svg";
import questionMark from "../../img/question-mark.svg";
import caretDown from "../../img/caret-down.svg";

export const HostingFeatures = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <section className="section mid-sec">
      <section>
        <h1 className="sec-heading">
          <span>All-in-one</span> Web Hosting
        </h1>
        <div className="sec-txt">
          <p>
            We prepared the best web hosting plan for you to start. You will be
            able to adjust plans as you go - our custom-built algorithm will
            provide suggestions based on your usage.
          </p>
        </div>
      </section>
      <section className="features-sec">
        <div className="upper-block">
          <h2>Best Web Hosting</h2>
        </div>
        <div
          className="lower-block"
          style={{ height: showFeatures ? "100%" : "", overflow: showFeatures ? "visible":"hidden" }}
        >
          <div className="first">
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Unmetered</span> traffic (Unlimited GB)
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100</span> Websites
              </p>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="fake-height fake-left"></div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="feature-price">
              <div className="price">
                <h1>
                  ₹149.00/<span>mo</span>
                </h1>
                <p>₹249.00/mo when you renew</p>
              </div>
              <button className="primary-btn">Select</button>
            </div>
            <div className="fake-height fake-center"></div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Weekly Backups
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Unlimited</span> Free SSL
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Domain
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Free</span> Email
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>Optimized</span> For Wordpress
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="fake-height fake-right"></div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100</span> Websites
              </p>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100</span> Websites
              </p>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100</span> Websites
              </p>
            </div>
            <div className="feature">
              <img src={tickImg} alt="true" />
              <p>
                <span>100 GB</span> SSD Storage
              </p>
              <div className="tooltip">
                <img src={questionMark} alt="true" />
                <span className="tooltip-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  iusto dolores mollitia praesentium, magni dicta soluta neque.
                  Sunt, odit earum?
                </span>
              </div>
            </div>
          </div>
          <div className="mid-plan-heading">
            <h2>Plan Features</h2>
          </div>
          <div className="bottom-btn">
            <button onClick={() => setShowFeatures(!showFeatures)}>
              See All Features{" "}
              <img
                src={caretDown}
                alt="img"
                style={{
                  transform: showFeatures ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
