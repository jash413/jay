"use client";
import React from "react";
import { useEffect, useState } from "react";
// import Explore from "@/components/explore/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
// import Layers from "@/components/layers/page";
import  Quality_certificates from "@/components/quality_certificates/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/index";
import Form from "@/components/form/page2";
import Quality_carousal from "@/components/quality_carousal/page";
// import Product_overview from "@/components/product_overview/page";
import Quality_text from "@/components/quality_text/page";
import HeroSection from "@/components/heroSection/page";
// import Technical from "@/components/technical/page";
import Quality_slider from "@/components/quality_slider/page";
import quality_image from "@/images/new_product.png";
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
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'default';
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
      <div>
        <HeroSection
          banner_image={quality_image}
          header_name="Quality"
          header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"
        />
      </div>
      <Quality_certificates/>
      {/* <Product_overview /> */}
      <Quality_text />
      <Quality_slider />
      <Quality_carousal/>
      {/* <Layers />
      <Technical /> */}
      {/* <Explore /> */}

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
