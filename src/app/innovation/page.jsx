"use client";
import React from "react";
import { useEffect, useState } from "react";
import Inner_header from "@/common/inner_header/page";
import Innovation_circles from "@/components/innovation_circles/page";
import Innovation_cards from "@/components/innovation_cards/page";
import Innovation_flex from "@/components/innovation_flex/page";
import Factory_walk from "@/components/factory_walk/page";
// import Timeline from "@/components/timeline/page";
// import Timeline1 from "@/components/timeline/page2";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page2";
import innovation_image from "@/images/innovationBanner.jpg";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import innovation_flex_img1 from "@/images/innovation1.png";
import innovation_flex_img2 from "@/images/innovation2.png";
import innvotion_flex_img3 from "@/images/innvotion3.png";
// import styles from "@/app/innovation/innovation.module.css"
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }
  }, 2000);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div>
        <Inner_header
          inner_header_image={innovation_image}
          heading_big="INNOVATION"
        />
        <Factory_walk />
        <Innovation_circles />
        <Innovation_cards
          image1={innovation_flex_img1}
          image2={innovation_flex_img2}
          image3={innvotion_flex_img3}
          card1Text={"Laminate"}
          card2Text={"Wooden Flooring"}
          card3Text={"Plywood"}
        />
        <Innovation_flex />

        {/* <div className={styles.just_space}>
        <Timeline />
      <Timeline1 />
        </div> */}
      </div>

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
