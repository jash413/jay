"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import footer_logo from "@/images/finalFooterLogo.png";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "@/common/AnimatedText/HeadingTextAnimation";
import Button from "@/common/button/button4";
import Title from "@/components/footer/test";
import styles from "@/components/footer/footer.module.css";
const Page = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className={styles.footer_upper_heading_wrapper}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
        >
          <HeadingTextAnimation
            heading={"Explore the Royale"}
            justifyContent={"left"}
            className={styles.footer_upper_heading}
          />
          <HeadingTextAnimation
            heading={"Experience"}
            justifyContent={"left"}
            className={styles.footer_upper_heading}
          />
        </motion.div>

        <div className={styles.justforfooterbutton}>
          <Button btn_text="Book Demo" />
        </div>
      </div>
      <Title />
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_firstSide}>
          <Image
            src={footer_logo}
            alt="Footer-logo"
            className={styles.footer_logo_image}
          />
        </div>
        <div className={styles.footer_secondSide}>
          <div className={styles.footer_titles}>{"INFORMATION"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>
              <Link href="/aboutUs">{"About us"}</Link>
            </li>
            {/* <li className={styles.footer_item_list}>{"Careers"}</li> */}
            <li className={styles.footer_item_list}>
              <Link href="/findStore">{"Find Nearest Store"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/quality">{"Quality"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/Blogs">{"Blogs"}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer_third_Side}>
          <div className={styles.footer_titles}>{"HELP"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>
            <Link href="/privacyPolicy">{"Privacy policy"}</Link>
            </li>
            
            <li className={styles.footer_item_list}>
              <Link href="/claimWarranty">{"Claim warranty"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/contactUs">{"Contact us"}</Link>
            </li>
            <li className={styles.footer_item_list}>{"FAQ's"}</li>
          </ul>
        </div>

        <div className={styles.footer_forthSide}>
          <div className={styles.footer_titles}>{"PRODUCT GUIDE"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>{"Laminates"}</li>
            <li className={styles.footer_item_list}>{"Wooden Floor"}</li>
            <li className={styles.footer_item_list}>
              <Link href="/product/plywood">{"Plywood"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/product/blockwood">{"Blockboard"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
