"use client";
import React from "react";
import { useEffect, useState } from "react";
import contactUs_image from "@/images/contactUs_banner_image1.png";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Navbar from "@/components/navbar/index";
import Contact_Map from "@/common/contact_map/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/heroSection/page";
const ContactUs = () => {
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
        <div>
          <Navbar />
        </div>
        <HeroSection
          banner_image={contactUs_image}
          header_name="Contact Us"
          header_comment="Connect with Confidence: Reach Out to Royal Touch Plywood's Dedicated Channel Partners for Prompt Assistance and Expert Guidance with Any Queries or Concerns You Have."
        />
        <Contact_Map />
      </div>
      <Form />
      <Footer />
      </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ContactUs;
