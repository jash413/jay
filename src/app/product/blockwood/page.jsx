"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Inner_header from "@/common/inner_header/page";
// import PlywoodNewSpecs from "@/components/plywoodNewSpecs/page";
// import Blockwood_slider from "@/components/blockwood_slider/page"
import Blockwood_flex from "@/components/blockwood_flex/page";
import Blockboard_main from "@/components/blockboard_main/page";
import innovation_image from "@/images/blockwood_header_img.png";
// import Inner_page_common_img from "@/common/inner_page_common_img/page";
// import common_img from "@/images/inner_page_common_img.png";
import Specifications from "@/common/specifications/page";
// import Inner_page_slider2 from "@/common/inner_page_slider2/page"
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Inner_page_slider2 from "@/common/inner_page_slider2/page";
import Innovation_cards from "@/components/innovation_cards/page";
import image1 from "@/images/Laminate_img.png";
import image2 from "@/images/plywood_img.png";
import image3 from "@/images/wooden_floor_img.png";
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
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2000);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Inner_header
        inner_header_image={innovation_image}
        heading="With the dimensional stability of solid wood and appearance and sleekness of plywood, Royale 
        Touche Blockboard gives you warp-free furniture that lasts a lifetime."
      />
      <Blockboard_main />
      <Blockwood_flex/>

      <Inner_page_slider2 />
      {/* <Inner_page_common_img common_img={common_img}  common_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/> */}
      {/* <Blockwood_slider/> */}
      {/* <PlywoodNewSpecs/> */}

      {/* <Inner_page_slider2/> */}
      <Specifications />
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
      <Form />
      <Footer />
    </main>
  );
};

export default Page;
