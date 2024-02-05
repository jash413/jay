"use client"
import {useEffect} from "react";
import Image from "next/image";
import styles from "@/components/explore/explore.module.css";
import explore from "@/images/explore_image.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import  HeadingTextAnimation from "@/common/AnimatedText/HeadingTextAnimation"
import Button from "@/common/button/button6"

const ExploreUs = () => {

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
    <div className={styles.explore_outer}>
      <div className={styles.explore_wrapper}>

        <div className={styles.explore_side_one_wrapper}>
          {/* <h1 className={styles.explore_heading}>Explore <br /> All Products</h1> */}


          <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
         >
        <HeadingTextAnimation
          heading={"Explore "}
          
          justifyContent={"left"}
          className={styles.explore_heading}
        />
        <HeadingTextAnimation
          heading={" All Products"}
          
          justifyContent={"left"}
          className={styles.explore_heading}
        />
        </motion.div>














          <p className={styles.explore_text}>Lorem ipsum dolor sit amet consectetuxxr, adipisicing elit. Ipsa quis autem inventore, hic ut consequuntur.</p>
          <div className={styles.explore_button_wrapper}>
          
          <Button  btn_text="Explore Us"/>
      
         
          </div>
        </div>
        <div className={styles.explore_side_two_wrapper}>
        <Image  src={explore} alt="Your Image"  className={styles.explore_image}/>
        </div>




      </div>
    </div>
  );
};
export default ExploreUs;
