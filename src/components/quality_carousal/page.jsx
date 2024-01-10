"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./change.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import AboutUs_carousal_image from "@/images/AboutUs_carousal_image1.png";
import styles from "@/components/quality_carousal/quality_carousal.module.css";
const Page = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      speed={1500}
      loop={true}
      className={styles.mySwiper}
    >
      <SwiperSlide>
        <div className={styles.third_section_content}>
          <Image
            src={AboutUs_carousal_image}
            alt="carousal_image"
            className={styles.third_section_image}
          />
          <div className={styles.third_section_overlay}>
            <p className={styles.third_section_overlay_text}>Text video</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.third_section_content}>
          <Image
            src={AboutUs_carousal_image}
            alt="carousal_image"
            className={styles.third_section_image}
          />
          <div className={styles.third_section_overlay}>
            <p className={styles.third_section_overlay_text}>Text video</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.third_section_content}>
          <Image
            src={AboutUs_carousal_image}
            alt="carousal_image"
            className={styles.third_section_image}
          />
          <div className={styles.third_section_overlay}>
            <p className={styles.third_section_overlay_text}>Text video</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.third_section_content}>
          <Image
            src={AboutUs_carousal_image}
            alt="carousal_image"
            className={styles.third_section_image}
          />
          <div className={styles.third_section_overlay}>
            <p className={styles.third_section_overlay_text}>Text video</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Page;