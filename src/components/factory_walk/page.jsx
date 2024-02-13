import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/factory_walk/factory_walk.module.css";
import "./factoryWalk.css";
gsap.registerPlugin(ScrollTrigger);

const AirpodsAnimation = (props) => {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false); // State to track animation end
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  const handleOpenInfo = () => {
    setInfo(true);
  };

  const handleCloseInfo = () => {
    setInfo(false);
  };

  console.log(info);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // Set a fixed size for the canvas (adjust as needed)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 1032;
    const currentFrame = (index) =>
      ` https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 1)
        .toString()
        .padStart(6, "0")}-scaled.jpg`;

        // https://royaletouche.humbeestudio.xyz/wp-content/uploads/2024/02/000001-scaled.jpg

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    const animationTimeline = gsap.timeline({
      onUpdate: render,
      onComplete: () => setAnimationEnded(true), // Set animationEnded to true when animation completes
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 0.1,
        end: "+=3500%",
      },
    });

    animationTimeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the image without scaling
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section ref={sectionRef} className={styles.factoryWalk_sec}>
        <canvas
          className={styles.canvas_layer_setting}
          ref={canvasRef}
        ></canvas>
        {/* {animationEnded && (
          <div>
          <button
            onClick={() => router.push("/")}
            className={styles.buttonShow}
            role="button"
          >
            <span className={styles.text1}>Buy Now</span>
            <span className={styles.text1}>Buy Now </span>
          </button>
          </div>
        )} */}
      </section>
    </div>
  );
};

export default AirpodsAnimation;
