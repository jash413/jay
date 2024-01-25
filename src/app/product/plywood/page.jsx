"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import innovation_image from "@/images/plywood_hero_img.jpeg";
import Plywood_main from "@/components/plywood_main/page";
// import Plywood_lights from "@/components/plywood_lights/page";
// import Plywood_carousal from "@/components/plywood_carousal/page"
// import PlywoodNewSpecs from "@/components/plywoodNewSpecs/page";
import Inner_header from "@/common/inner_header/page";
import Specifications from "@/common/specifications/page";
import Inner_page_slider2 from "@/common/inner_page_slider2/page";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Innovation_cards from "@/components/innovation_cards/page";
import ProductOverview from "@/components/product_overview/page";
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
        heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Plywood_main />

      <ProductOverview />
      <Inner_page_slider2 />
      {/* <Plywood_lights />
      <PlywoodNewSpecs /> */}
      {/* <Inner_page_common_img common_img={common_img} common_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/> */}
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
      {/* <Plywood_carousal/> */}

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
