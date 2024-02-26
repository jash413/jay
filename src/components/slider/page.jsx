import { Navigation, EffectFade, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import rightArrow from "@/images/arrow2.svg";
import rightArrowDisable from "@/images/arrow2Disable.svg";
import rightArrowMobile from "@/images/arrow2mobile.svg";
import rightArrowMobileDisable from "@/images/arrow2mobileDisable.svg";
import image1 from "@/images/Stateoftheartfacility-01011.jpg";
import image2 from "@/images/VacuumPressureTreatment1.jpg";
import image3 from "@/images/gapless1.jpg";
import image4 from "@/images/BWPPlywoodBoilingWaterproofPlywood1.jpg";
import image5 from "@/images/4PressTechnology1.jpg";
import image6 from "@/images/Multiplequalitychecks1.jpg";
import "./slider.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import styles from "@/components/slider/slider.module.css";
const Page = () => {
  
  return (
    <div className={styles.sliderCard_outer_first}>
      <div className={styles.sliderCard}>
        <Swiper
          effect="fade"
          speed={800}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Navigation, EffectFade, A11y]}
          spaceBetween={5}
          loop={false}
          slidesPerView={1}
          navigation={{
            nextEl: ".slider_image_swiper_button_next__Eddeo img",
            prevEl: ".slider_image_swiper_button_prev__tPH_z img",
          }}
        >
          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image1}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>
              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>
                    State of the art facility
                  </div>

                  <div className={styles.slider_text}>
                    {
                      "Equipped with cutting edge technology and advanced machinery, our plywood facility is made in a total span of 28 acres, with a production capacity of 1,00,000 sheets per month."
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image2}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>
                    Vacuum Pressure Treatment
                  </div>
                  <div className={styles.slider_text}>
                    {
                      "Every single veneer is treated with nano particles that penetrate deep within the veneers that give termite and borer proof and fire retardant properties to the plywood."
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image3}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>100% gapless</div>

                  <div className={styles.slider_text}>
                    {
                      "With sophisticated imported core and panel composers and scarf jointers, every single layer that goes into Royale Touche Performance Ply is gapless, giving unmatched durability and strength to the plywood"
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image4}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>
                    100% BWP Plywood (Boiling Waterproof Plywood)
                  </div>

                  <div className={styles.slider_text}>
                    {
                      "With 100% in-house manufacturing of high solid polymer phenolic resins, we ensure our ply passes the 120 hrs boiling water test, making it suitable for all"
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image5}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>4 Press Technology</div>
                  <div className={styles.slider_text}>
                    {
                      "Manufactured using 4 times pressing to ensure equilibrium moisture content within the glue line, ensuring structural stability, thus preventing warping and delamination"
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={image6}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.slider_header}>
                    Multiple quality checks
                  </div>
                  <div className={styles.slider_text}>
                    {
                      "With hammer tests conducted at four different stages of the manufacturing process and stringent grading norms, we ensure that every single ply that gets dispatched from the facility meets the quality parameters promised to our customers"
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.customerCard_sideTwo}>
          <div className={styles.image_swiper_button_next}>
            <Image
              className={styles.navigation_arrow}
              src={rightArrow}
              alt="rightArrow"
            />
            <Image
              className={`${styles.navigation_arrow} disable`}
              src={rightArrowDisable}
              alt="rightArrow"
            />
          </div>
          <div className={styles.image_swiper_button_prev}>
            <Image
              className={styles.navigation_arrow}
              src={rightArrow}
              alt="rightArrow"
            />
            <Image
              className={`${styles.navigation_arrow} disable`}
              src={rightArrowDisable}
              alt="rightArrow"
                          />
          </div>
        </div>
        <div className={styles.customerCard_sideTwo_mobile}>
          <div className={styles.image_swiper_button_next}>
            <Image
              className={styles.navigation_arrow}
              src={rightArrowMobile}
              alt="rightArrow"
            />
            <Image
               className={`${styles.navigation_arrow} disable`}
              src={rightArrowMobileDisable}
              alt="rightArrow"
            />
          </div>
          <div className={styles.image_swiper_button_prev}>
            <Image
              className={styles.navigation_arrow}
              src={rightArrowMobile}
              alt="rightArrow"
            />
             <Image
               className={`${styles.navigation_arrow} disable`}
              src={rightArrowMobileDisable}
              alt="rightArrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
