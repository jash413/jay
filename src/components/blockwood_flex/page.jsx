import React from "react";
import Image from "next/image";
import "./blockwood_flex.css";
import icon1 from "@/images/inner_icon1.png";
import icon2 from "@/images/inner_icon2.png";
import icon3 from "@/images/inner_icon3.png";
import icon4 from "@/images/inner_icon4.png";
import rectangle from "@/images/blockCard1.png";
import rectangle2 from "@/images/blockCard2.png";

const Slide_section = () => {
  return (
    <>
      <div className="section">
        {/* <div className="icon_section">
          <div className="icons">
            <Image src={icon1} alt="Icon" />
            <div className="title_section">
              <p className="heading">Same Day Doorstep Delivery</p>
              <p className="title">Within Banglore City Limits</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon2} alt="Icon" />
            <div className="title_section">
              <p className="heading">Genuine Products</p>
              <p className="title">At Best Prices</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon3} alt="Icon" />
            <div className="title_section">
              <p className="heading">Warranty Products</p>
              <p className="title">All Company Warranty</p>
            </div>
          </div>
          <div className="icons">
            <Image src={icon4} alt="Icon" />
            <div className="title_section">
              <p className="heading">The Plywood People</p>
              <p className="title">Since 1985</p>
            </div>
          </div>
        </div> */}

        <div className="card_section">
          <div className="left blockCardPosition">
            <Image src={rectangle} alt="image" />
            <div className="blockCardText1">
              <div className="blockCardTextHeading">100% Pine Core</div>
              <div className="blockCardTextContent">
                The edge-to-edge arrangement of pine blocks in the core ensures
                zero gap filling, ensuring exceptional strength and stability to
                the blockboard
              </div>
            </div>
            {/* <h1>mohit</h1> */}
          </div>
          <div className="right blockCardPosition">
            <Image src={rectangle2} alt="image" />
            <div className="blockCardText2">
              <div className="blockCardTextHeading">
                Dual Hardwood Veneer for Ultra-smooth Surface
              </div>
              <div className="blockCardTextContent">
                Two layers of selected hardwood timber on both sides, with 100%
                Gurjan face ensures unparalleled strength and ultra smooth
                finish, making it suitable for high-quality finishes in
                furniture and interior panelling
              </div>
            </div>
            {/* <h1>suman</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide_section;
