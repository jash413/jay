import * as Yup from "yup";
export const FormSchemas = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required"),
  Phone: Yup.string().required("Mobile Number is required"),
  Whatsapp: Yup.string().required("Whatsapp Number is required"),
  Address: Yup.string().required("Address is required"),
  Pincode: Yup.string().required("City is required"),
  City: Yup.string().required("Mobile Number is required"),
  District: Yup.string().required("District is required"),
  State: Yup.string().required("State is required"),
  Dealer_Name: Yup.string().required("Dealer Name is required"),
});