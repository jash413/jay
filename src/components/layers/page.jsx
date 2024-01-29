import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/layers/layer.module.css";

gsap.registerPlugin(ScrollTrigger);

const Airpods = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [circleSize, setCircleSize] = useState(100); // Initial circle size

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
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

      else if (windowWidth >= 1599) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } 
      

      // else if (windowWidth >= 1440) {
      //   canvas.width = 1500; // Width remains constant for tablet screens
      //   canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      // } 
      
      else if (windowWidth >= 1200) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1024) {
        canvas.width = 1050; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
      } else if (windowWidth >= 768) {
        canvas.width = 800; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      }
      
      else if (windowWidth >= 425) {
        canvas.width = 800; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 

      else if (windowWidth >= 375) {
        canvas.width = 750; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 


      else if (windowWidth >= 320) {
        canvas.width = 690; // Adjust the width for screen width 375
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



    const frameCount = 224;
    const currentFrame = (index) =>
      `https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 8)
        .toString()
        .padStart(4, "0")}-scaled.jpg`;

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    // Fade in the counter and circle on mount
    gsap.from([`.${styles.percentageCounter}`, `.${styles.percentage_counter_outer}`], {
      opacity: 1,
      duration: 1,
      delay: 0.5, // Adjust the delay as needed
    });

    const timeline = gsap.timeline({
      onUpdate: () => {
        const progress = (timeline.progress() * 20).toFixed(0);
        setScrollPercentage(progress);
        render();
      },
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=1000%",
      },
    });

    timeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );    

      // Draw the outer circle
      context.beginPath();
      const outerCircleRadius = 120 + timeline.progress() * 190; // Adjust the multiplier as needed
      context.arc(canvas.width / 2, canvas.height / 2, outerCircleRadius, 0, 2 * Math.PI);
      context.strokeStyle = "#218e88";
      context.lineWidth = 0.5;
      context.stroke();

      // Draw the inner circle
      context.beginPath();
      const innerCircleRadius = 100 + timeline.progress() * 140; // Adjust the multiplier as needed
      context.arc(canvas.width / 2, canvas.height / 2, innerCircleRadius, 0, 2 * Math.PI);
      context.fillStyle = "rgba(33, 142, 136, 0.3)";
      context.fill(); 
      context.lineWidth = 1;
      context.stroke();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);




  // Update the circle size on scroll

  useEffect(() => {
    const handleScrollDirection = () => {
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setScrollPercentage(0); // Hide the counter when scrolling down
        } else {
          // Scrolling up
          // The counter will be updated by the GSAP timeline onUpdate
        }
        lastScrollTop = currentScrollTop;
      });
    };

    handleScrollDirection();

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);

  return (
    <div className={styles.counter_relm}>
      <section ref={sectionRef}>
        <div className={styles.percentage_counter_outer}>
          <div
            className={styles.percentageCounter}
            // style={{ fontSize: `${circleSize}px` }}
          >
            {scrollPercentage}
          </div>
          {/* <span className={styles.counter_text}>Royale Touche</span> */}
        </div>
        <canvas className={styles.canvas_layer_settings} ref={canvasRef}></canvas>
      </section>
    </div>
  );
};

export default Airpods;
