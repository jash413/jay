"use client";
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/preloader/page";
import Home from "@/app/home/page";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  document.title = "Royale Touche Performance Ply";

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  setTimeout(() => {
    setIsLoading(false);
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }
  }, 3500);

  
  return (
    <main>
     <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Home />
 
    </main>
  );
}
