import React from "react";
import { Navigation, EffectFade, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Common_animation from "@/common/common_animation/animation";
import slide1 from "@/images/plywoodImage1.jpg";
import slide2 from "@/images/plywoodImage2.jpg";
import slide3 from "@/images/plywoodImage3.jpg";
import slide4 from "@/images/plywoodImage4.jpg";
import slide5 from "@/images/plywoodImage5.jpg";
import slide6 from "@/images/plywoodImage6.jpg";
import slide7 from "@/images/plywoodImage7.jpg";
import slide8 from "@/images/plywoodImage8.jpg";
import slide13 from "@/images/plywoodImage13.jpg";
import slide10 from "@/images/plywoodImage10.jpg";
import slide11 from "@/images/plywoodImage11.jpg";
import slide12 from "@/images/plywoodImage12.jpg";
import slide9 from "@/images/plywoodImage9.jpg";
import slide14 from "@/images/plywoodImage14.jpg";
import slide15 from "@/images/plywoodImage15.jpg";
import slide16 from "@/images/plywoodImage16.jpg";
import slide17 from "@/images/plywoodImage17.jpg";
import styles from "@/common/inner_page_slider2/inner_slider2.module.css";
import "@/common/inner_page_slider2/inn.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const page = () => {
  const text = [
    "Super",
    "Exclusive",
    "handcrafted",
    "luxury",
    "laminates",
    "that",
    "make",
    "a bold ",
    "statement",
    "Always",
    "Classy",
    "Beautifully",
    "Luxurious",
    "ONE",
    "transcends",
    "trends",
    "to ",
    "create",
    "timeless",
    "elegance.",
  ];

  return (
    <div className={styles.inner_carousal_two_outer}>
      <div className={styles.inner_carousal_two_heading}>
        <Common_animation text="KEY FEATURES" />
      </div>
      <div className={styles.inner_carousal_two_top}>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={styles.inner_carousal_two_text}>
              <span className={styles.inner_carousal_two_span}>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 1,
                      delay: inView ? i / 15 : 0,
                    }}
                    className={
                      el === "Super" || el === "Exclusive"
                        ? styles.Blue_text2
                        : ""
                    }
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </span>
            </div>
          )}
        </InView>

        <div className={styles.inner_carousal_top_spacing}>
          <Swiper
            modules={[Navigation, EffectFade, A11y, Autoplay]}
            spaceBetween={12}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              10: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              991: {
                // width: 991,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide1}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide2}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>H</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      High Solid Polymer used adhesives:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Use of 100% BWP grade, High solid Phenolic polymer
                        ensures better bonding strength and excellent boiling
                        waterproof properties.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide3}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>S</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Strength and durability by balanced construction:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        The plywood is constructed using an advanced
                        cross-bonding technology, which enhances its strength
                        and durability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide4}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>W</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_headingx}>
                      Weather Durability by longer conditioning system of raw
                      material and pressed material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        High durability against all weather conditions, ensuring
                        longevity and warp-free performance.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide5}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide6}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>W</div>
                </div>
                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_headingx}>
                      Weather Durability by longer conditioning system of raw
                      material and pressed material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        High durability against all weather conditions, ensuring
                        longevity and warp-free performance.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide7}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide8}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide9}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide10}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide11}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide12}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide13}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide14}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide15}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide16}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.inner_carousal_slider_outer}>
                <div className={styles.inner_carousal_slider_img_outer}>
                  <Image
                    src={slide17}
                    alt="slide"
                    className={styles.inner_carousal_slider_img}
                  />
                  <div className={styles.inner_carousal_word}>R</div>
                </div>

                <div className={styles.inner_carousal_data_outer}>
                  <div>
                    <div className={styles.inner_carousal_data_heading}>
                      Raw Material:
                    </div>
                    <div className={styles.inner_carousal_paragraph_flex}>
                      <div className={styles.inner_carousal_paragraph1}>
                        Made from carefully selected hardwood timber to ensure
                        high strength and durability.Gurjan species used in the
                        face veneers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default page;
