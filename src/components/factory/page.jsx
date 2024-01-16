"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/factory/factory.module.css"
gsap.registerPlugin(ScrollTrigger);


const AirpodsAnimation = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 6 });
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // Set a fixed size for the canvas (adjust as needed)
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;


    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1600) {
        canvas.width = 2000; // Width remains constant for desktop screens
        canvas.height = windowHeight * 1; // Adjust the height for desktop screens
      } 
      else if (windowWidth >= 1440) {
        canvas.width = 1440; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } 

      else if (windowWidth >= 1200) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1024) {
        canvas.width = 1200; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
      } else if (windowWidth >= 768) {
        canvas.width = 1200; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      }
      
      else if (windowWidth >= 425) {
        canvas.width = 700; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 

      else if (windowWidth >= 375) {
        canvas.width = 700; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 


      else if (windowWidth >= 320) {
        canvas.width = 800; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 
      
      else {
        canvas.width = 400; // Adjust the width for screen width 320
        canvas.height = windowHeight * 0.6; // Adjust the height for screen width 320
      }

      // Update ScrollTrigger end position based on canvas dimensions
      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 301;
    const currentFrame = (index) =>
      ` https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 4)
        .toString()
        .padStart(5, "0")}-scaled.jpg`;

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=1500%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      })

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the image without scaling
      context.drawImage(imagesRef.current[airpodsRef.current.frame], 0, 0, canvas.width, canvas.height);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <canvas className={styles.canvas_factory_settings}  ref={canvasRef}></canvas>
    </section>
  );
};

export default AirpodsAnimation;
