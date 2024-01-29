"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import styles from "@/components/form/form.module.css";
import Button from "@/common/button/button3";
import Image from "next/image";
import { Slide, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import form_image from "@/images/final_form_image.png";
import { ContactFormSchemas } from "@/components/schemas/page";
import "./form.css"
const Contactform = () => {
  const [formResponse, setFormResponse] = useState("");
  const City = [
    { label: "Ahmedabad" },
    { label: "Mumbai" },
    { label: "Surat" },
    { label: "Gandhinagar" },
  ];
  const initialValue = {
    fullName: "",
    Email: "",
    Phone: "",
    City: "",
    message: "",
  };
  // const [isSearchable, setIsSearchable] = useState(true);
 

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
    },
  });

  console.log(values);
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
                placeholder="John smith"
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
                placeholder="helloworld123@gmai.com"
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
                placeholder="+91 8140X XXXXX"
              />
              {touched.Phone && errors.Phone && (
                <p className={styles.error}>{errors.Phone}</p>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="City">City</label>
              <Select
                className="basic-single"
                optionLabel="name"
                placeholder="Select City"
                name="City"
                options={City}
                onChange={handleChange}
                value={values.City}
                // onChange={() => setIsSearchable((state) => !state)}
              />

              {touched.City && errors.City && (
                <p className={styles.error}>{errors.City}</p>
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
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
              {touched.message && errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
            <div className={styles.common_button_outer2}>
              <Button btn_text="Send Message" />
            </div>
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
        </form>
        <div className={styles.Image_Container}>
          <Image src={form_image} alt="none" className={styles.form_image} />
        </div>
      </div>
    </div>
  );
};
export default Contactform;