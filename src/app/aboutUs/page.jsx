"use client";
import React from "react";
import { useEffect, useState } from "react";
// import Explore from "@/components/explore/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/heroSection/page";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Real_Timeline from "@/common/real_timeline/page";
// import ThreeCards from "@/common/threeCards/page";
import Slider from "@/components/slider/page";
import Innovation_cards from "@/components/innovation_cards/page";
import image1 from "@/images/Laminate_img.png";
import image2 from "@/images/plywood_img.png";
import image3 from "@/images/wooden_floor_img.png";
// import Aboutus_hammer from "@/components/aboutUs_hammer/page"
import aboutUs_image from "@/images/new_about.png";
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
        <Navbar />
      </div>
      <div style={{ background: "white" }}>
        <HeroSection
          banner_image={aboutUs_image}
          header_name="About Us"
          header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"
        />
        {/* <Aboutus_hammer/> */}
        <Real_Timeline />
        <Slider />
        {/* <ThreeCards /> */}
        <Innovation_cards
          link1={"#"}
          link2={"#"}
          link3={"#"}
          image1={image1}
          image2={image2}
          image3={image3}
          card1Text={"Laminate"}
          card2Text={"Wooden Flooring"}
          card3Text={"Plywood"}
        />
        {/* <Explore/> */}
      </div>
      <Form />
      <Footer />
    </main>
  );
};

export default Page;
