"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import usp1 from "@/images/ix1x.jpg"
import usp2 from "@/images/ix2x.jpg"
import usp3 from "@/images/ix3x.jpg"
import usp4 from "@/images/ix4x.jpg"
import usp5 from "@/images/ix5x.jpg"
import usp6 from "@/images/ix6x.jpg"
import usp7 from "@/images/ix7x.jpg"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";
const Page2 = () => {
      const container = useRef(null);

      useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
            createAnimation();
          }, []);
    
      const createAnimation = () => {
        gsap.to(".triggered-element", {
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            start: "top 10%",
        end: "bottom ",
          },
          opacity: 0,
          color: "white",
          ease: "none",
          stagger: 0.9,
        });
      };
  return (
      <div className={styles.display}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
        <div className={styles.timeline_animation_text}>Promise Of Quality</div>
          <div
            className={styles.timeline}
          ref={container}>
            <div className={styles.line}></div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
              <div>
              <Image src={usp1} alt="image" className={styles.img_main} />
              </div>
                <p className={styles.timeline_number}>01</p>
                <h2 className={styles.twoo}>
                 Vaccuum  Pressure Treatment
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp2} alt="image" className={styles.img_main} />
              </div>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>
                  Fully Composed Core & Panels
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp3} alt="image" className={styles.img_main} />
              </div>
              <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>
                  100% Phenolic Resigns
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp4} alt="image" className={styles.img_main} />
              </div>
              <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>
                Ternite & Bores Proof
                  
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp5} alt="image" className={styles.img_main} />
              </div>
              <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>
                Fire Resistant
                  
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp6} alt="image" className={styles.img_main} />
              </div>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>
                Boiling Water Proof
               
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
            <div>
              <Image src={usp7} alt="image" className={styles.img_main} />
              </div>
              <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>
                High Nail Welding Capacity
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page2