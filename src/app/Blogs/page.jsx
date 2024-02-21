"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Blogs_banner from "@/images/blogs_banner.png";
import BlogPost from "@/common/blogPosts/page";

const Blogs = () => {
  document.title="Blogs - Royale Touch Performance Ply";
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



      <Inner_header inner_header_image={Blogs_banner} heading_big="BLOGS" />
      <BlogPost />
      <Footer />
     
      
    </main>
  );
};

export default Blogs;
