"use client";
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/preloader/page";
import Home from "@/app/home/page";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  //   if (typeof document !== 'undefined') {
  //     document.body.style.cursor = 'default';
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
      <Home />
      </>
        )}
      </AnimatePresence>
    </main>
  );
}
