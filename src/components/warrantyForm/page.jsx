"use client";
import { React, useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FormSchemas } from "@/components/warrantyForm/formSchema"
import "./warrantyForm.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import invoice_icon from "@/images/invoice_svg.svg"
// import "react-toastify/dist/ReactToastify.css";
import styles from "@/components/warrantyForm/warrantyForm.module.css"
const FormCommon = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [uploadedInvoice, setUploadedInvoice] = useState(null);
  const [uploadedInvoice1, setUploadedInvoice1] = useState(null);
  const [uploadedInvoice2, setUploadedInvoice2] = useState(null);
  const [uploadedInvoice3, setUploadedInvoice3] = useState(null);
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
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  const chooseFile1 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice1) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice1(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };

  const chooseFile2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice2) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice2(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  const chooseFile3 = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (uploadedInvoice3) {
        alert("You can upload only one file.");
        return;
      }
      const isPDF = file.type === "application/pdf";

      const isSizeValid = file.size <= 10 * 1024 * 1024;

      if (isPDF && isSizeValid) {
        setUploadedInvoice3(file.name);
      } else {
        alert(
          "Invalid file. Please upload a PDF file with a maximum size of 10 MB."
        );
      }
    }
  };
  // const [submitAttempted, setSubmitAttempted] = useState(false);
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
    Category: "",
    Product_Name: "",
    no_of_sheets: "",
    No_of_thickness: "",
    Invoice_File: "",
    Invoice_File1: "",
    Invoice_File2: "",
    Invoice_File3: "",
    agreeTerms: "",
    updates: "",
    offers: "",
  };

  const clearUploadedFile = () => {
    setUploadedInvoice(null);
    setUploadedInvoice1(null);
    setUploadedInvoice2(null);
    setUploadedInvoice3(null);
  };

  // const handleSubmit = (values, action) => {
  //   action.resetForm();
  //   console.log("Form Values:", values);

  //   if (uploadedInvoice) {
  //     console.log("Uploaded PDF file:", uploadedInvoice);
  //   }
  //   clearUploadedFile();
  // };
 


  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemas,
    // onClick: notify,
    onSubmit: (value, action) => {
      console.log("value", value);
      if (uploadedInvoice) {
        console.log("Uploaded PDF file:", uploadedInvoice);
      }
      clearUploadedFile();
      emailjs
        .send(
          "service_6pitte7",
          "template_g1gqwr7",
          values,
          "dp6xvACY2kw4Z6gwc"
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          // resetForm(); 
        })
        .catch((error) => {
          console.error("Email send error:", error);
        });
      action.resetForm();
    
    },

  });

  console.log(values);

 

  const form = useRef();

  const notify = () =>
  toast.success("Form Submitted Successfully!", {
    position: "top-right",
    autoClose: 8000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // const sendEmail = (e) => {
  //   // e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6pitte7",
  //       "template_g1gqwr7",
  //       form.current,
  //       "dp6xvACY2kw4Z6gwc"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

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

      <form
        ref={form}
        onSubmit={handleSubmit}
        className={styles.RT_Form_Main_Form}
      >
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
                  name="Category"
                  placeholder="Select Category"
                  className={styles.input_field}
                  // value={values.Category}
                />
                 {touched.Category && errors.Category && (
                <p className="error">{errors.Category}</p>
              )}
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
                  name="Product_Name"
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
                  name="no_of_sheets"
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
                  name="No_of_thickness"
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
            {/* <div
              className="button-57"
              onClick={() => setshowMore(!showMore)}
            >
              {showMore ? "ADD TO MORE" : "ADD TO MORE"}
            </div> */}



            <button onClick={() => setshowMore(!showMore)} class="button-57" role="button"><span class="text"> ADD TO MORE</span><span> ADD TO MORE</span></button>
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
                    name="Invoice_File"
                    onChange={chooseFile}
                  />
                </label>
                {uploadedInvoice && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 1 has been uploaded: {uploadedInvoice}
                  </p>
                )}
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
                  onClick={() => document.getElementById("getFile1").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile1"
                    name="Invoice_File1"
                    onChange={chooseFile1}
                  />
                </label>
                {uploadedInvoice1 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 2 has been uploaded: {uploadedInvoice1}
                  </p>
                )}
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
                  onClick={() => document.getElementById("getFile2").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile2"
                    name="Invoice_File2"
                    onChange={chooseFile2}
                  />
                </label>
                {uploadedInvoice2 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 3 has been uploaded: {uploadedInvoice2}
                  </p>
                )}
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
                  onClick={() => document.getElementById("getFile3").click()}
                >
                  <Image src={invoice_icon} alt="none" />
                  <input
                    type="file"
                    data-max-size="2048"
                    id="getFile3"
                    name="Invoice_File3"
                    onChange={chooseFile3}
                  />
                </label>
                {uploadedInvoice3 && (
                  <p className={styles.uploadedInvoiceText}>
                    Invoice 4 has been uploaded: {uploadedInvoice3}
                  </p>
                )}
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
                <input
                className={styles.checkbox}
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={values.agreeTerms}
                  onChange={handleChange}
                  required
                />
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
                <input
                className={styles.checkbox}
                  type="checkbox"
                  id="updates"
                  name="updates"
                  checked={values.updates}
                  onChange={handleChange}
                />
              </div>
              <p className={styles.form_agree_content}>
                Click here to receive updates on WhatsApp
              </p>
            </div>
            <div className={styles.form_last_section_content}>
              <div>
                <input
                className={styles.checkbox}
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={values.offers}
                  onChange={handleChange}
                />
              </div>
              <p className={styles.form_agree_content}>
                I wish to apply for consumer promotion offer
              </p>
            </div>
          </div>
          {/*  */}
          <div className={styles.Form_btn_Outer_Main}>

          <button onClick={notify} class="button-57" role="button"><span class="text"> Submit</span><span> Submit</span></button>

            {/* <button className={styles.Form_btn_inner} onClick={notify}>
              Submit
            </button> */}
            <Toaster position="top-right" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormCommon;