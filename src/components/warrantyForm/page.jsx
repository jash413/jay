"use client";
import { React, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import { FormSchemas } from "./formSchema"
import Image from "next/image";
import Button from "@/common/button/button9"
import Button10 from "@/common/button/button10"
import invoice_icon from "@/images/invoice_svg.svg";
import "./warrantyForm.css";
import styles from  "@/components/warrantyForm/warrantyForm.module.css"
const FormCommon = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { name: "Product 1", code: "NY" },
    { name: "Product 2", code: "RM" },
    { name: "Product 3", code: "LDN" },
    { name: "Product 4", code: "IST" },
    { name: "Product 5", code: "PRS" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "CATEGORY 1", code: "1" },
    { name: "CATEGORY 2", code: "2" },
    { name: "CATEGORY 3", code: "3" },
    { name: "CATEGORY 4", code: "4" },
    { name: "CATEGORY 5", code: "5" },
  ];

  const [selectedSheets, setSelectedSheets] = useState(null);
  const sheets = [
    { name: "1", code: "1" },
    { name: "2", code: "2" },
    { name: "3", code: "3" },
    { name: "4", code: "4" },
    { name: "5", code: "5" },
  ];

  const [selectedThickness, setSelectedThickness] = useState(null);
  const Thicknesses = [
    { name: "1.5", code: "1" },
    { name: "2.5", code: "2" },
    { name: "3.5", code: "3" },
    { name: "4.5", code: "4" },
    { name: "5.5", code: "5" },
  ];

  const chooseFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      checkSize(e);
    }
  };

  const [showMore, setshowMore] = useState(false);
  const initialValue = {
    fullName: "",
    email: "",
    Phone: "",
    Whatsapp: "",
    Address: "",
    Pincode: "",
    City: "",
    District: "",
    State: "",
    Dealer_Name: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);
    },
  });
  console.log(values);
//   document.getElementById("myCheck").required = true;
  return (
    <div className={styles.Form_Container}>
      <div className={styles.Form_Header}>
        <div className={styles.Form_Header_Content}>
          <p className={styles.Form_Header_text}>
            FILL IN YOUR DETAILS TO GET YOUR
          </p>
          <p className={styles.Form_Header_text1}>WARRANTY CERTIFICATE NOW!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.RT_Form_Main_Form}>
        <div className={styles.RT_Form_main}>
        <div className={styles.RT_Form_Flex}>
          <div className={styles.RT_Form_field}>
            <label htmlFor="Name" className={styles.form_Label}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="fullName"
              className={styles.input_field}
              onChange={handleChange}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <p className="error">{errors.fullName}</p>
            )}
          </div>
          <div className={styles.RT_Form_field}>
            <label htmlFor="email" className={styles.form_Label}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className={styles.input_field}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
        </div>

        <div className={styles.RT_Form_Flex}>
          <div className={styles.RT_Form_field}>
            <label htmlFor="Phone" className={styles.form_Label}>
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              name="Phone"
              className={styles.input_field}
              onChange={handleChange}
              value={values.Phone}
            />
            {touched.Phone && errors.Phone && (
              <p className="error">{errors.Phone}</p>
            )}
          </div>
          <div className={styles.RT_Form_field}>
            <label htmlFor="Whatsapp" className={styles.form_Label}>
              Whatsapp Number *
            </label>
            <input
              type="tel"
              placeholder="Enter Whatsapp Number"
              name="Whatsapp"
              className={styles.input_field}
              onChange={handleChange}
              value={values.Whatsapp}
            />
            {touched.Whatsapp && errors.Whatsapp && (
              <p className="error">{errors.Whatsapp}</p>
            )}
          </div>
        </div>

        <div className={styles.RT_Form_Flex}>
          <div className={styles.RT_Form_field_address}>
            <label htmlFor="Address" className={styles.form_Label}>
              Address
            </label>
            <input
              type="tel"
              placeholder="Enter Address"
              name="Address"
              className={styles.input_field}
              onChange={handleChange}
              value={values.Address}
            />
            {touched.Address && errors.Address && (
              <p className="error">{errors.Address}</p>
            )}
          </div>
          <div className={styles.RT_Form_field_pincode}>
            <label htmlFor="Pincode" className={styles.form_Label}>
              Pincode
            </label>
            <input
              type="tel"
              placeholder="Enter Pincode"
              name="Pincode"
              className={styles.input_field}
              onChange={handleChange}
              value={values.Pincode}
            />
            {touched.Pincode && errors.Pincode && (
              <p className="error">{errors.Pincode}</p>
            )}
          </div>
        </div>

        <div className={styles.RT_Form_Flex}>
          <div className={styles.RT_Form_field}>
            <label htmlFor="City" className={styles.form_Label}>
              City
            </label>
            <input
              type="text"
              placeholder="Enter City"
              name="City"
              className={styles.input_field}
              onChange={handleChange}
              value={values.City}
            />
            {touched.City && errors.City && (
              <p className="error">{errors.City}</p>
            )}
          </div>
          <div className={styles.RT_Form_field}>
            <label htmlFor="District" className={styles.form_Label}>
              District
            </label>
            <input
              type="text"
              placeholder="Enter District"
              name="District"
              className={styles.input_field}
              onChange={handleChange}
              value={values.District}
            />
            {touched.District && errors.District && (
              <p className="error">{errors.District}</p>
            )}
          </div>
          <div className={styles.RT_Form_field}>
            <label htmlFor="State" className={styles.form_Label}>
              State
            </label>
            <input
              type="text"
              placeholder="Enter State"
              name="State"
              className={styles.input_field}
              onChange={handleChange}
              value={values.State}
            />
            {touched.State && errors.State && (
              <p className="error">{errors.State}</p>
            )}
          </div>
        </div>

        <div className={styles.RT_Form_Flex}>
          <div className={styles.RT_Form_field_dealer}>
            <label htmlFor="Dealer_Name" className={styles.form_Label}>
              Dealer/Contractor Name
            </label>
            <input
              type="text"
              placeholder="Enter Dealer Name"
              name="Dealer_Name"
              className={styles.input_field}
              onChange={handleChange}
              value={values.Dealer_Name}
            />
            {touched.Dealer_Name && errors.Dealer_Name && (
              <p className="error">{errors.Dealer_Name}</p>
            )}
          </div>
        </div>
        {/*  category*/}
        <div className={styles.Form_Second_Part}>
          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Category_Name" className={styles.form_Label}>
                Category Name
              </label>
              <Dropdown
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.value)}
                options={categories}
                optionLabel="name"
                placeholder="Select Category"
                className={styles.input_field}
              />
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Category_Name" className={styles.form_Label}>
                Select Product *
              </label>
              <Dropdown
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.value)}
                options={products}
                optionLabel="name"
                placeholder="Product Name"
                className={styles.input_field}
              />
            </div>
          </div>
          {/* sheets */}
          <div className={styles.RT_Form_Flex}>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Sheets" className={styles.form_Label}>
                No Of Sheets
              </label>
              <Dropdown
                value={selectedSheets}
                onChange={(e) => setSelectedSheets(e.value)}
                options={sheets}
                optionLabel="name"
                placeholder="Enter No Of Sheets"
                className={styles.input_field}
              />
            </div>
            <div className={styles.RT_Form_field}>
              <label htmlFor="Thickness" className={styles.form_Label}>
                Thickness
              </label>
              <Dropdown
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.value)}
                options={Thicknesses}
                optionLabel="name"
                placeholder="Select Thickness"
                className={styles.input_field}
              />
            </div>
          </div>
        </div>

        {showMore && (
          <div className={styles.Form_Second_Part}>
            <div className={styles.RT_Form_Flex}>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Category_Name" className={styles.form_Label}>
                  Category Name
                </label>
                <Dropdown
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.value)}
                  options={categories}
                  optionLabel="name"
                  placeholder="Select Category"
                  className={styles.input_field}
                />
              </div>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Category_Name" className={styles.form_Label}>
                  Select Product *
                </label>
                <Dropdown
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.value)}
                  options={products}
                  optionLabel="name"
                  placeholder="Product Name"
                  className={styles.input_field}
                />
              </div>
            </div>
            {/* sheets */}
            <div className={styles.RT_Form_Flex}>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Sheets" className={styles.form_Label}>
                  No Of Sheets
                </label>
                <Dropdown
                  value={selectedSheets}
                  onChange={(e) => setSelectedSheets(e.value)}
                  options={sheets}
                  optionLabel="name"
                  placeholder="Enter No Of Sheets"
                  className={styles.input_field}
                />
              </div>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Thickness" className={styles.form_Label}>
                  Thickness
                </label>
                <Dropdown
                  value={selectedThickness}
                  onChange={(e) => setSelectedThickness(e.value)}
                  options={Thicknesses}
                  optionLabel="name"
                  placeholder="Select Thickness"
                  className={styles.input_field}
                />
              </div>
            </div>
          </div>
        )}

        <div className={styles.Form_btn_Outer}>
          {/* <button
            className={styles.Form_btn}
            onClick={() => setshowMore(!showMore)}
          >
            {showMore ? "ADD TO MORE" : "ADD TO MORE"}
          </button> */}


          <Button10 type="submit"   onClick={() => setshowMore(!showMore)} btn_text="Add To More"/>
        </div>
        </div>

        {/* Upload File */}
        <div className={styles.invoice_upload_container}>
          <div>
            <p className={styles.upload_invoice_text}>
              Click here to upload invoice*
            </p>
          </div>
          {/* Invoice */}
          <div className={styles.invoice_Main}>
            <div className={styles.inovoice_inner_flex}>
              <div className={styles.invoice_inner_cards}>
                <label
                  htmlFor="img"
                  onClick={() => document.getElementById("getFile").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile"
                    onChange={chooseFile}
                  />
                </label>
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 1
                </p>
              </div>
            </div>

            <div className={styles.inovoice_inner_flex}>
              <div className={styles.invoice_inner_cards}>
                <label
                  htmlFor="img"
                  onClick={() => document.getElementById("getFile").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile"
                    onChange={chooseFile}
                  />
                </label>
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 2
                </p>
              </div>
            </div>

            <div className={styles.inovoice_inner_flex}>
              <div className={styles.invoice_inner_cards}>
                <label
                  htmlFor="img"
                  onClick={() => document.getElementById("getFile").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile"
                    onChange={chooseFile}
                  />
                </label>
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 3
                </p>
              </div>
            </div>
            <div className={styles.inovoice_inner_flex}>
              <div className={styles.invoice_inner_cards}>
                <label
                  htmlFor="img"
                  onClick={() => document.getElementById("getFile").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile"
                    onChange={chooseFile}
                  />
                </label>
              </div>
              <div className={styles.invoice_flex_text_outer}>
                <p className={styles.invoice_flex_text_inner}>
                  Upload Invoice 4
                </p>
              </div>
            </div>
          </div>
          {/* invoice ends */}
          <div className={styles.form_last_section}>
            <div className={styles.form_last_section_content}>
              <div>
                <input type="checkbox" id="myCheck" name="checkbox" />
              </div>
              <p className={styles.form_agree_content}>
                Click here to agree to{" "}
                <span className={styles.forms_terms_condition}>
                  Terms And Conditions
                </span>
              </p>
            </div>
            <div className={styles.form_last_section_content}>
              <div>
                <input type="checkbox" name="checkbox" />
              </div>
              <p className={styles.form_agree_content}>
                Click here to receive updates on WhatsApp
              </p>
            </div>
            <div className={styles.form_last_section_content}>
              <div>
                <input type="checkbox" name="checkbox" />
              </div>
              <p className={styles.form_agree_content}>
                I wish to apply for consumer promotion offer
              </p>
            </div>
          </div>
          {/*  */}
          <div className={styles.Form_btn_Outer_Main}>
            <button className={styles.Form_btn_inner}>Submit</button>
            <Button btn_text="Submit"/>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormCommon;