import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "@/images/Laminate_img.png";
import image2 from "@/images/plywood_img.png";
import image3 from "@/images/wooden_floor_img.png";
import styles from "@/common/threeCards/threecards.module.css";
const Section = () => {
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
    <div className={styles.Main_RT_Section}>
      <div className={styles.Main_RT_Section_main}>
        <Link className={styles.overlay_text_inner} href="/">
          <motion.div
           ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
           className={styles.Main_RT_Section_flex}>
            <Image src={image1} alt="none" className={styles.image1} />
            <div className={styles.overlay_text}>
              <p className={styles.overlay_text_inner}>Laminates</p>
            </div>
          </motion.div>
        </Link>

        <Link className={styles.overlay_text_inner} href="/">
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
           className={styles.Main_RT_Section_flex}>
            <Image src={image3} alt="none" className={styles.image1} />
            <div className={styles.overlay_text}>
              <p className={styles.overlay_text_inner}>wooden flooring</p>
            </div>
          </motion.div>
        </Link>

        <Link className={styles.overlay_text_inner} href="/product">
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
           className={styles.Main_RT_Section_flex}>
            <Image src={image2} alt="none" className={styles.image1} />
            <div className={styles.overlay_text}>
              <p className={styles.overlay_text_inner}>plywood</p>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
export default Section;
