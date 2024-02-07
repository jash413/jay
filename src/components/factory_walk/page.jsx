"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/factory_walk/factory_walk.module.css";
import "./factoryWalk.css";
import closeIcon from "@/images/closeR.svg";
import Images from "next/image";
gsap.registerPlugin(ScrollTrigger);

const AirpodsAnimation = () => {
  const [info, setInfo] = useState(false);
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
          scrub: 0.1,
          // scrub: true,
          end: "+=3500%",
        },
      })
      .to(airpodsRef.current, {
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
      <div className={styles.factory_walk_text}>Lorem ipsum dolor sit</div>

      <section ref={sectionRef} className={styles.factoryWalk_sec}>
        {!info && (
          <div className={styles.info} onClick={handleOpenInfo}>
            i
          </div>
        )}
        <div className={`${styles.infoData} ${info ? "show" : "hide"}`}>
          <div className={styles.close} onClick={handleCloseInfo}>
            <Images src={closeIcon} alt="closeIcon" />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Dryer</div>
            <div className={styles.content}>
              100% VPT treated veneers go through a 12-stage drying process to
              ensure optimum drying and even moisture distribution
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Composer</div>
            <div className={styles.content}>
              These veneers are composed using imported core and L-type panel
              composers to make 100% gapless 8x4 sheets with alternate grain
              structure called core and panels
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Glue Spreader</div>
            <div className={styles.content}>
              These core and panels are glued using 100% BWP grade phenolic
              resins with added preservatives to ensure optimum bonding and
              protection against termites borers and fire
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Pre-press</div>
            <div className={styles.content}>
              The ply is cold pressed to ensure even glue distribution across
              the sheet to avoid any delamination issues
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Press</div>
            <div className={styles.content}>
              The ply is then pressed under high temperature to ensure that the
              phenolic resin cures and desired bonding is achieved
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Matte DD Saw</div>
            <div className={styles.content}>
              The matte ply is then trimmed on all four sides to achieve the
              desired length and width
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Calibrator</div>
            <div className={styles.content}>
              This matte ply is then calibrated using a heavy duty calibrator to
              achieve uniform thickness across the sheet
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Putty Filling Line</div>
            <div className={styles.content}>
              Any minor holes which are natural to the veneer are carefully
              filled using skilled workmanship
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Glue Spreader</div>
            <div className={styles.content}>
              100% imported Gurjan veneer is glued on both sides of the matte
              ply with 100% melamine resin with preservatives that imparts
              strength and sleekness to the plywood
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Pre-press</div>
            <div className={styles.content}>
              Pre-press ensures even distribution of the resin and optimum
              bonding
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Press</div>
            <div className={styles.content}>
              This is the final stage of the 4 press technology where the final
              ply is pressed at high temperatures
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Final DD Saw</div>
            <div className={styles.content}>
              Any excess material is trimmed as a part of the final sizing of
              the plywood to achieve the desired size
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Both Side Sander</div>
            <div className={styles.content}>
              The plywood undergoes final sanding to ensure that uniform
              thickness is achieved
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.heading}>Dipping</div>
            <div className={styles.content}>
              The plywood surface is treated with preservatives for protection
              against termites and borers and fire.
            </div>
          </div>
        </div>
        <canvas ref={canvasRef}></canvas>
      </section>
    </div>
  );
};

export default AirpodsAnimation;
