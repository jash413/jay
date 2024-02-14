"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/heroSection/page";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Real_Timeline from "@/common/real_timeline/page";
import Slider from "@/components/slider/page";
// import Innovation_cards from "@/components/innovation_cards/page";
// import image1 from "@/images/Laminate.jpg";
// import image2 from "@/images/Plywood.jpg";
// import image3 from "@/images/Wooden-Floor.jpg";
import aboutUs_image from "@/images/new_about.jpg";
import WhyPlywood from "@/components/whyPlywood/WhyPlywood";
import OurStory from "@/components/ourStory/page";
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  //   if (typeof document !== "undefined") {
  //     document.body.style.cursor = "default";
  //     window.scrollTo(0, 0);
  //   }
  // }, 2000);


  const setLoadingComplete = (status) => {
    setIsLoading(!status);
  };

  useEffect(() => {
    const loadComponents = async () => {
      await Promise.all([
        new Promise((resolve, reject) => {
          const images = document.querySelectorAll("img");
          
          const videos = document.querySelectorAll("video");

          let loadedCount = 0;
          const totalAssets = images.length + videos.length;

          const checkAllAssetsLoaded = () => {
            loadedCount++;
            if (loadedCount === totalAssets) {
              resolve();
            }
          };

          const handleError = () => {
            reject();
          };

          images.forEach((image) => {
            if (image.complete) {
              checkAllAssetsLoaded();
            } else {
              image.addEventListener("load", checkAllAssetsLoaded);
              image.addEventListener("error", handleError);
            }
          });

          fonts.forEach((font) => {
            font.addEventListener("load", checkAllAssetsLoaded);
            font.addEventListener("error", handleError);
          });

          videos.forEach((video) => {
            if (video.readyState >= 3) {
              checkAllAssetsLoaded();
            } else {
              video.addEventListener("loadedmetadata", checkAllAssetsLoaded);
              video.addEventListener("error", handleError);
            }
          });
        }),
      ]);
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    };

    loadComponents()
      .catch(() => {
        console.error("Failed to load assets");
      });
  }, []);


  return (
    <main>
       <AnimatePresence>
        {isLoading ? (
          // Pass setLoadingComplete to Preloader component
          <Preloader setLoadingComplete={setLoadingComplete} />
        ) : (
          <>
     
      <div>
        <Navbar />
      </div>
      <div style={{ background: "#d9d9d9" }}>
        <HeroSection
          banner_image={aboutUs_image}
          header_name="About Us"
          header_comment="Royale Touche is a leading manufacturer of luxury laminates, plywood and wooden flooring in India."
        />
        <OurStory />
        <WhyPlywood />
        <Real_Timeline />
        <Slider />
      </div>
      <Form />
      <Footer />
      </>
        )}
      </AnimatePresence>
    </main>
  );
};
export default Page;
