import ContactAddressItem from "@/components/contactAddress/ContactAddressItem";
import styles from "@/components/contactAddress/contactAddress.module.css";

const contactAddressData = [
  {
    heading: "Address",
    address: "Olympic Decor LLP One 42, 401 North Tower, Near Jayantilal Park BRTS, ",
    address2: " Ambli Bopal Road, Ahmedabad 380054. Gujarat, India.",
  },
  {
    heading: "Contact",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    number1: "1800 103 4357",
    number2: "1800 103 4357",
  },
  {
    heading: "Get in Touch",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    mail1: "sales@royaletouche.com",
    // mail2: "info@brahamarishi.org",
  },
];

const Page = () => {
  return (
    <div className={styles.contactAddress}>
      <div className={styles.contactAddress_wrapper}>
        {contactAddressData.map((item, index) => (
          <ContactAddressItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Page;