"use client";
import { useFormik } from "formik";
import { useState } from "react";
import Select from "react-select";
import styles from "@/components/form/form.module.css";
import Button from "@/common/button/button3";
import Image from "next/image";
import { Slide, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import form_image from "@/images/formNewImage.jpg";
import { ContactFormSchemas } from "@/components/schemas/page";
import "./form.css";
const Contactform = () => {
  const [formResponse, setFormResponse] = useState("");

  const yearOptions = [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Amreli", label: "Amreli" },
    { value: "Anand", label: "Anand" },
    { value: "Banaskantha", label: "Banaskantha" },
    { value: "Bhavnagar", label: "Bhavnagar" },
    { value: "Dahod", label: "Dahod" },
    { value: "Dang", label: "Dang" },
    { value: "Gandhinagar", label: "Gandhinagar" },
    { value: "Godhara", label: "Godhara" },
    { value: "Jamnagar", label: "Jamnagar" },
    { value: "Junagadh", label: "Junagadh" },
    { value: "Kheda", label: "Kheda" },
    { value: "Kutch", label: "Kutch" },
    { value: "Mahesana", label: "Mahesana" },
    { value: "Narmada", label: "Narmada" },
    { value: "Navsari", label: "Navsari" },
    { value: "Patan", label: "Patan" },
    { value: "Porbandar", label: "Porbandar" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Sabarkantha", label: "Sabarkantha" },
    { value: "Surat", label: "Surat" },
    { value: "Surendranagar", label: "Surendranagar" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Valsad", label: "Valsad" },
    { value: "Tapi", label: "Tapi" },
    { value: "Navsari", label: "Navsari" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Maharastra", label: "Maharastra" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Delhi", label: "Delhi" },
    { value: "Kerela", label: "Kerela" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Goa", label: "Goa" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "BHOPAL", label: "BHOPAL" },
    { value: "Ujjain", label: "Ujjain" },
    { value: "Jagatpur", label: "Jagatpur" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Tripura", label: "Tripura" },
    { value: "Mirzapur", label: "Mirzapur" },
    { value: "Mathura", label: "Mathura" },
    { value: "Patna", label: "Patna" },
    { value: "Raipur", label: "Raipur" },
    { value: "Kota", label: "Kota" },
    { value: "Rohini", label: "Rohini" },
    { value: "Ranchi", label: "Ranchi" },
    { value: "Nepal", label: "Nepal" },
    { value: "Chennai", label: "Chennai" },
    { value: "Odisha", label: "Odisha" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Odisha", label: "Odisha" },
    { value: "Assam", label: "Assam" },
    { value: "Rewa", label: "Rewa" },
    { value: "Solapur", label: "Solapur" },
    { value: "Mansa", label: "Mansa" },
    { value: "Jaisalmer", label: "Jaisalmer" },
    { value: "Udaipur", label: "Udaipur" },
    { value: "Hyderabad", label: "Hyderabad" },
  ];
  const initialValue = {
    fullName: "",
    Email: "",
    Phone: "",
    year: "",
    message: "",
  };

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: ContactFormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);
      emailjs
        .send(
          "service_6pitte7",
          "template_azgm81o",
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
      console.log("FINALVALUE", value);
    },
  });

  console.log("value", values);
  console.log("response", formResponse.text);
            
  return (
    <div className={styles.contact_form}>
      <div className={styles.contact_form_wrapper}>
        <form onSubmit={handleSubmit} className={styles.Form_Container}>
          <div className={styles.Form_content}>
            <h1 className={styles.contact_form_title}>Contact Us</h1>

            <div className={styles.field}>
              <label htmlFor="fullName">Name</label>
              <input
                type="name"
                name="fullName"
                onChange={handleChange}
                value={values.fullName}
                placeholder="Rajesh Sharma"
              />
              {touched.fullName && errors.fullName && (
                <p className={styles.error}>{errors.fullName}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                onChange={handleChange}
                value={values.Email}
                placeholder="example@gmail.com"
              />
              {touched.Email && errors.Email && (
                <p className={styles.error}>{errors.Email}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
                placeholder="8140X XXXXX"
              />
              {touched.Phone && errors.Phone && (
                <p className={styles.error}>{errors.Phone}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="City">City</label>
              <Select
                placeholder="Select City"
                value={values.year}
                onChange={(selectedOption) => {
                  let event = {
                    target: { name: "year", value: selectedOption },
                  };
                  handleChange(event);
                }}
                isSearchable={true}
                options={yearOptions}
                name="year"
              />
              {touched.year && errors.year && (
                <p className={styles.error}>{errors.year}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                rows={5}
                onChange={handleChange}
                value={values.message}
                placeholder="Enter your message"
              />
              {touched.message && errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
            <div className={styles.common_button_outer2}>
              <Button btn_text="Send Message" />
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
        <div className={styles.Image_Container}>
          <Image src={form_image} alt="none" className={styles.form_image} />
        </div>
      </div>
    </div>
  );
};
export default Contactform;
