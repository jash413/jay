// Section1.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import plywood_main_img from "@/images/plywood_main_table.png";
import plywood_main from "@/images/floor.png";
import Button8 from "@/common/button/button8";
import Common_animation from "@/common/common_animation/animation";
import styles from "@/components/plywood_main/plywood_main.module.css";

const Section1 = () => {
  const text = [
    "Plywood",
    "that",
    "stands",
    "the",
    "test",
    "of",
    "time.",
    "For",
    "us",
    "plywood",
    "is",
    "not",
    "just",
    "a",
    "building",
    "material,",
    "its",
    "the",
    "backbone.",
    "of",
    "beautiful",
    "and",
    "timeless",
    "wooden",
    "furniture.",
  ];

  return (
    <div>
      <div className={styles.section2}>
        <div className={styles.nmnm}>
          <Common_animation text="PLYWOOD" />
        </div>
        <div className={styles.image_m_outer}>
          <Image src={plywood_main} alt="none" className={styles.image_m} />
        </div>

        <div className={styles.abc}>
          <div className={styles.abc1}>
            <InView triggerOnce={true}>
              {({ inView: inViewImage, ref: refImage }) => (
                <motion.div
                  ref={refImage}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inViewImage ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.7, // Adjust the delay as needed
                  }}
                >
                  <Image
                    src={plywood_main_img}
                    alt="none"
                    className={styles.image2}
                  />
                </motion.div>
              )}
            </InView>
          </div>
          <div className={styles.section_Content}>
            <div className={styles.section_Content_Text}>
              <InView triggerOnce={true}>
                {({ inView, ref }) => (
                  <div ref={ref} className={styles.circles_paragraph}>
                    {text.map((el, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 1,
                          delay: inView ? i / 15 : 0,
                        }}
                        className={
                          el === "About" || el === "Plywood"
                            ? styles.Blue_text
                            : ""
                        }
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                  </div>
                )}
              </InView>
            </div>
            <InView triggerOnce={true}>
              {({ inView: inViewButton, ref: refButton }) => (
                <motion.div
                  className="explore_btn"
                  ref={refButton}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inViewButton ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <Button8 btn_text={"Explore Collections"} />
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
