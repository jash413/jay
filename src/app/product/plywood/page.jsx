"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import innovation_image from "@/images/plywood_hero_img.jpeg";
import Plywood_main from "@/components/plywood_main/page";
import Plywood_lights from "@/components/plywood_lights/page";
// import Plywood_carousal from "@/components/plywood_carousal/page"
// import PlywoodNewSpecs from "@/components/plywoodNewSpecs/page";
import Inner_header from "@/common/inner_header/page";
import Specifications from "@/common/specifications/page";
import Inner_page_slider2 from "@/common/inner_page_slider2/page";
import Inner_page_slider3 from "@/common/inner_page_slider3/page";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Innovation_cards from "@/components/innovation_cards/page";
import ProductOverview from "@/components/product_overview/page";
import image1 from "@/images/Laminate_img.png";
import image2 from "@/images/plywood_img.png";
import image3 from "@/images/wooden_floor_img.png";
import SmartChioceTable from "@/common/SmartChoice-Table/page";

const SpecificationsLeftData = [
  {
    title: "GRADE:",
    text: "BWP Grade, Marine Grade (IS:710)",
  },
  {
    title: "SPECIES USED:",
    text: "Diptocarpus spp. (Gurjan) & Selected Hardwood Timber (Eucalyptus spp.)	",
  },
  {
    title: "FACE VENEER: ",
    text: "Both Side Gurjan (Diptocarpus spp.)",
  },
  {
    title: "SIZES OF PLYWOOD:",
    text: "2400 X 1220mm & 2140 X 1220mm ",
  },
  {
    title: "LENGTHS:",
    text: "up to + 2 to 4 mm of specified length",
  },
  {
    title: "WIDTHS",
    text: "Up to + 1 to 2 mm of specified width",
  },
  {
    title: "THICKNESS TOLERANCE",
    text: "Full Thickness	(Exact thickness as specified on the sheet)",
  },
  {
    title: "FACE VENEER THICKNESS:",
    text: "0.30 MM",
  },
  {
    title: "CALIBRATIONS:",
    text: "Both Sides Calibrated",
  },
  {
    title: "RESINS USED:",
    text: "High Solid BWP grade Phenolic Polymer",
  },
  {
    title: "EMISSION LEVEL:",
    text: "E0-Level Compliant",
  },
  {
    title: "PRESERVATIVE TREATMENT:",
    text: "Four-stage preservative treatment (Veneer, Resin, Adhesive & 	Surface Treatment)",
  },
  {
    title: "EDGE STRAIGHTNESS:",
    text: "0.20%",
  },
  {
    title: "SQUARENESS:",
    text: "0.20%",
  },
  {
    title: "DENSITIES:",
    text: "700 TO 720 Kg/ cm3",
  },
];

const SpecificationsRightData = [
  {
    title: "CORE GAP, OVERLAP:",
    text: "100% used fully composed sheet to avoid gaps and overlap.",
  },
  {
    title: "WATER ABSORPTION (24 HRS)",
    text: "< 1 -2 %	",
  },
  {
    title: "WATER ABSORPTION (48 HRS)",
    text: "< 2 - 3 %",
  },
  {
    title: "SCREW HOLDING CAPACITY",
    text: "> 265 Kg",
  },
  {
    title: "GLUE ADHESION STRENGTH",
    text: " DRY STATE (AVERAGE) > 1590 N",
    text2: "DRY STATE (INDIVIDUAL) > 1310 N",
    text3: "ADHESION OF PLIES (KNIFE TEST)- EXCELLENT",
  },
  {
    title: "BOILING WATER RESISTANCE TEST (AFTER 72 HRS BOILING)",
    text: "WET STATE AVERAGE > 1190 N",
    text1: "WETDUAL > 1020 N",
    text2: "ADHESION OF PLIES STATE INDIVI (KNIFE TEST) - EXCELLENT",
  },
  {
    title: "MYCOLOGICAL TESTS",
    text: "GLUE SHEAR STRENGTH > 1170 N",
    text1: "ADHESION OF PLIES -- EXCELLENT",
  },
  {
    title: "RETENTION 0F PRESERVATIVE CHEMICALS",
    text: "12.5 KG/M3 (VPT Treatment)",
  },
  {
    title: "STATIC BENDING STRENGTH",
    text: "MODULUS OF RUPTURE (DRY STATE)",
    text1: "ALONG THE GRAIN 	> 58 N/ MM2",
    text2: "ACROSS THE GRAIN 	> 49 N/MM2",
    text3: "MODULUS OF ELASTICITY (DRY STATE)",
    text4: "ALONG THE GRAIN 	> 7990 N/ MM2",
    text5: "ACROSS THE GRAIN 	> 6400 N/ MM2",
    text6: "MODULUS OF RUPTURE (WET STATE)",
    text7: "ALONG THE GRAIN 	> 35 N/ MM2",
    text8: "ACROSS THE GRAIN 	> 29 N/MM2",
    text9: "MODULUS OF ELASTICITY (WET STATE)",
    text10: "ALONG THE GRAIN 	> 4090 N/ MM2",
    text11: "ACROSS THE GRAIN 	> 3360 N/ MM2",
  },
  {
    title: "TENSILE STRENGTH",
    text: "ALONG THE GRAIN > 58 N/ MM2",
    text: "ACROSS THE GRAIN	> 39 N/ MM2",
    text: "SUM OF TENSILE > 97 N/MM2",
  },
];

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2000);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Inner_header
        inner_header_image={innovation_image}
        heading="Plywood that is engineered to outsmart termites and borers, fights fire and is safe for your loved 
        ones with E-0 emissions - An all in one Ply in its true sense"
      />

      <ProductOverview />
      {/* <Inner_page_slider2 /> */}
      <Inner_page_slider3 />

      {/* <PlywoodNewSpecs /> */}
      {/* <Inner_page_common_img common_img={common_img} common_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/> */}
      <Specifications
        leftData={SpecificationsLeftData}
        rightData={SpecificationsRightData}
      />
      <SmartChioceTable />
      <Plywood_lights />
      <Plywood_main />
      {/* <Innovation_cards
        link1={"#"}
        link2={"#"}
        link3={"#"}
        image1={image1}
        image2={image2}
        image3={image3}
        card1Text={"Laminate"}
        card2Text={"Wooden Flooring"}
        card3Text={"Plywood"}
      /> */}
      {/* <Plywood_carousal/> */}

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
