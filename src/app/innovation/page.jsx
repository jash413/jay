"use client";
import React from "react";
import { useEffect, useState } from "react";
import Inner_header from "@/common/inner_header/page";
import Innovation_circles from "@/components/innovation_circles/page";
import Innovation_cards from "@/components/innovation_cards/page";
import Innovation_flex from "@/components/innovation_flex/page";
import Factory_walk from "@/components/factory_walk/page";
import Factory_walk1 from "@/components/factory_walk/page2";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import innovation_image from "@/images/InnovationNewBanner.jpg";
import innovation_image_mobile from "@/images/inn_banner_new.png";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import innovation_flex_img1 from "@/images/innovation1.png";
import innovation_flex_img2 from "@/images/innovation2.png";
import innvotion_flex_img3 from "@/images/innvotion3.png";
import styles from "@/app/innovation/innovation.module.css";
const Page = () => {
  useEffect(() => {
    document.title = "Innovation - Royale Touch Performance Ply";
  }, []);
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
  // }, 3000);
  function handleLoad(data) {
    setIsLoading(data);
  }

  // const setLoadingComplete = (status) => {
  //   setIsLoading(!status);
  // };

  // useEffect(() => {
  //   const loadComponents = async () => {
  //     await Promise.all([
  //       new Promise((resolve, reject) => {
  //         const images = document.querySelectorAll("img");

  //         const videos = document.querySelectorAll("video");

  //         let loadedCount = 0;
  //         const totalAssets = images.length + videos.length;

  //         const checkAllAssetsLoaded = () => {
  //           loadedCount++;
  //           if (loadedCount === totalAssets) {
  //             resolve();
  //           }
  //         };

  //         const handleError = () => {
  //           reject();
  //         };

  //         images.forEach((image) => {
  //           if (image.complete) {
  //             checkAllAssetsLoaded();
  //           } else {
  //             image.addEventListener("load", checkAllAssetsLoaded);
  //             image.addEventListener("error", handleError);
  //           }
  //         });

  //         fonts.forEach((font) => {
  //           font.addEventListener("load", checkAllAssetsLoaded);
  //           font.addEventListener("error", handleError);
  //         });

  //         videos.forEach((video) => {
  //           if (video.readyState >= 3) {
  //             checkAllAssetsLoaded();
  //           } else {
  //             video.addEventListener("loadedmetadata", checkAllAssetsLoaded);
  //             video.addEventListener("error", handleError);
  //           }
  //         });
  //       }),
  //     ]);
  //     setIsLoading(false);
  //     document.body.style.cursor = "default";
  //     window.scrollTo(0, 0);
  //   };

  //   loadComponents()
  //     .catch(() => {
  //       console.error("Failed to load assets");
  //     });
  // }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div>
        <div className={styles.innovation_desk}>
          <Inner_header
            inner_header_image={innovation_image}
            heading_big="INNOVATION"
          />
        </div>
        <div className={styles.innovation_mobile}>
          <Inner_header
            inner_header_image={innovation_image_mobile}
            heading_big="INNOVATION"
          />
        </div>
        {/* <Factory_walk /> */}

        <Factory_walk loadFacoryWalk={handleLoad} />

        <Factory_walk1 loadFacoryWalkMobile={handleLoad} />
      </div>

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
