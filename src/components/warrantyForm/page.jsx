"use client";
import { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import { FormSchemas } from "@/components/warrantyForm/formSchema";
import "./warrantyForm.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import invoice_icon from "@/images/invoice_svg.svg";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/components/warrantyForm/warrantyForm.module.css";
const FormCommon = () => {
  const form = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [uploadedInvoice, setUploadedInvoice] = useState(null);
  const [uploadedInvoice1, setUploadedInvoice1] = useState(null);
  const [uploadedInvoice2, setUploadedInvoice2] = useState(null);
  const [uploadedInvoice3, setUploadedInvoice3] = useState(null);
  const products = [
    { name: "8ft x 4ft", code: "NY" },
    { name: "7ft x 4ft", code: "RM" },
  ];

  // const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "Royale Touche Performance Ply-Promaxx", code: "1" },
    { name: "Royale Touche Performance Ply-Promaxx+", code: "2" },
    { name: "Royale Touche Blockboard", code: "3" },
  ];

  // const [selectedThickness, setSelectedThickness] = useState(null);
  const [thicknessOptions, setThicknessOptions] = useState([]);
  const handleCategoryChange = (category) => {
    values.Category = category;
    values.Product_Name = null;

    if (category && category.code === "1") {
      setThicknessOptions([
        { name: "6mm", code: "6mm" },
        { name: "9mm", code: "9mm" },
        { name: "12mm", code: "12mm" },
        { name: "16mm", code: "16mm" },
        { name: "19mm", code: "19mm" },
        { name: "25mm", code: "25mm" },
      ]);
    } else if (category && category.code === "2") {
      setThicknessOptions([
        { name: "6mm", code: "6mm" },
        { name: "9mm", code: "9mm" },
        { name: "12mm", code: "12mm" },
        { name: "16mm", code: "16mm" },
        { name: "19mm", code: "19mm" },
        { name: "25mm", code: "25mm" },
      ]);
    } else {
      setThicknessOptions([
        { name: "6mm", code: "6mm" },
        { name: "9mm", code: "9mm" },
      ]);
    }
  };
  // const [selectedSheets, setSelectedSheets] = useState(null);
  // const sheets = [
  //   { name: "1", code: "1" },
  //   { name: "2", code: "2" },
  //   { name: "3", code: "3" },
  //   { name: "4", code: "4" },
  //   { name: "5", code: "5" },
  // ];
  // const Thicknesses = [
  //   { name: "6mm", code: "1" },
  //   { name: "9mm", code: "2" },
  //   { name: "12mm", code: "3" },
  //   { name: "16mm", code: "4" },
  //   { name: "19mm", code: "5" },
  //   { name: "25mm", code: "5" },
  // ];

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

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
  const [formResponse, setFormResponse] = useState("");
  const [sections, setSections] = useState([]);
  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([...sections, {}]);
  };

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
    sheets: "",
    No_of_thickness: "",
    Invoice_File: "",
    Invoice_File1: "",
    Invoice_File2: "",
    Invoice_File3: "",
    // agreeTerms: "",
    // updates: "",
    // offers: "",
  };

  const clearUploadedFile = () => {
    setUploadedInvoice(null);
    setUploadedInvoice1(null);
    setUploadedInvoice2(null);
    setUploadedInvoice3(null);
  };


  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemas,
    // innerRef: form,
    onSubmit: (value, action) => {
      console.log("Form values", value);
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
          setFormResponse(response);
          action.resetForm();
          // resetForm();
        })
        .catch((error) => {
          console.error("Email send error:", error);
        });
      submitMessage();
    },
  });
  console.log("FINAL VALUES",values);
  console.log("response", formResponse.text);



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
                  value={values.Category}
                  onChange={(e) => {
                    handleCategoryChange(e.value);
                    setSelectedProduct(null);
                  }}
                  // onChange={(e) => setSelectedCategory(e.value)}
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
                  value={values.Product_Name}
                  // onChange={(e) => {
                  //   handleProductChange(e.value);
                  // }}
                  onChange={handleChange}
                  // onChange={(e) => setSelectedProduct(e.value)}
                  options={products}
                  optionLabel="name"
                  name="Product_Name"
                  placeholder="Product"
                  className={styles.input_field}
                />
                {touched.Product_Name && errors.Product_Name && (
                  <p className="error">{errors.Product_Name}</p>
                )}
              </div>
            </div>
            {/* sheets */}
            <div className={styles.RT_Form_Flex}>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Sheets" className={styles.form_Label}>
                  No Of Sheets
                </label>
                {/* <Dropdown
                  value={selectedSheets}
                  onChange={(e) => setSelectedSheets(e.value)}
                  options={sheets}
                  optionLabel="name"
                  name="no_of_sheets"
                  placeholder="Enter No Of Sheets"
                  className={styles.input_field}
                /> */}
                <input
                  type="number"
                  placeholder="Enter No of sheets"
                  name="sheets"
                  className={styles.input_field}
                  onChange={handleChange}
                  value={values.sheets}
                />
                {touched.sheets && errors.sheets && (
                  <p className="error">{errors.sheets}</p>
                )}
              </div>
              <div className={styles.RT_Form_field}>
                <label htmlFor="Thickness" className={styles.form_Label}>
                  Thickness
                </label>
                <Dropdown
                  value={values.No_of_thickness}
                  onChange={handleChange}
                  // onChange={(e) => handleThicknessChange(e.value)}
                  options={thicknessOptions}
                  optionLabel="name"
                  name="No_of_thickness"
                  placeholder="Select Thickness"
                  className={styles.input_field}
                  // disabled={!selectedProduct}
                />
                {touched.No_of_thickness && errors.No_of_thickness && (
                  <p className="error">{errors.No_of_thickness}</p>
                )}
              </div>
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index} className={styles.Form_Second_Part}>
              <div className={styles.RT_Form_Flex}>
                <div className={styles.RT_Form_field}>
                  <label htmlFor="Category_Name" className={styles.form_Label}>
                    Category Name
                  </label>
                  <Dropdown
                    value={values.Category}
                    onChange={(e) => {
                      handleCategoryChange(e.value);
                      setSelectedProduct(null);
                    }}
                    // onChange={(e) => setSelectedCategory(e.value)}
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
                    value={values.Product_Name}
                    onChange={handleChange}
                    // onChange={(e) => setSelectedProduct(e.value)}
                    options={products}
                    optionLabel="name"
                    name="Product_Name"
                    placeholder="Product"
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
                  {/* <Dropdown
                 value={selectedSheets}
                 onChange={(e) => setSelectedSheets(e.value)}
                 options={sheets}
                 optionLabel="name"
                 name="no_of_sheets"
                 placeholder="Enter No Of Sheets"
                 className={styles.input_field}
               /> */}
                  <input
                    type="number"
                    placeholder="Enter No of sheets"
                    name="sheets"
                    className={styles.input_field}
                    onChange={handleChange}
                    value={values.sheets}
                  />
                  {touched.sheets && errors.sheets && (
                    <p className="error">{errors.sheets}</p>
                  )}
                </div>
                <div className={styles.RT_Form_field}>
                  <label htmlFor="Thickness" className={styles.form_Label}>
                    Thickness
                  </label>
                  <Dropdown
                    value={values.No_of_thickness}
                    // onChange={handleThicknessChange}
                    onChange={handleChange}
                    // onChange={(e) => handleThicknessChange(e.value)}
                    options={thicknessOptions}
                    optionLabel="name"
                    name="No_of_thickness"
                    placeholder="Select Thickness"
                    className={styles.input_field}
                    // disabled={!selectedProduct}
                  />
                </div>
              </div>

              <div className={styles.Form_btn_Outer1}>
                <button
                  onClick={() => removeSection(index)}
                  class="button-571"
                  role="button"
                >
                  <span class="text">Remove</span>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}


          <div className={styles.Form_btn_Outer}>
            <button onClick={addSection} class="button-57" role="button">
              <span className="text">
                {/* <div className=""> */}
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg_add"
                >
                  <path
                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fill-rule="white"
                  />
                </svg>
                {/* </div> */}
                ADD MORE 
              </span>
              <span>CLICK TO ADD MORE</span>
            </button>
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
                    value={values.Invoice_File}
                    // onChange={(e) => handleInvoiceFileChange(e.target.files[0])}
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
                    // onChange={(e) => handleInvoiceFileChange(e.target.files[0])}
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
                    // onChange={(e) => handleInvoiceFileChange(e.target.files[0])}
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
                    // onChange={(e) => handleInvoiceFileChange(e.target.files[0])}
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

            {/* <div className={styles.form_last_section_content}>
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
            </div> */}
            {/* <div className={styles.form_last_section_content}>
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
            </div> */}
          </div>
          {/*  */}
          <div className={styles.Form_btn_Outer_Main}>
            <button class="button-57" role="button">
              <span class="text"> Submit</span>
              <span> Submit</span>
            </button>

            {/* <button className={styles.Form_btn_inner} onClick={notify}>
              Submit
            </button> */}
            {/* <Toaster position="top-right" /> */}
            {formResponse.text === "OK" && (
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition={Slide}
                className={"contactFormNotification"}
                // progressStyle={{ background: "#f90" }}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormCommon;
