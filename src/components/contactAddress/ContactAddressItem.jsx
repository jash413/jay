import styles from "@/components/contactAddress/contactAddress.module.css";

const ContactAddressItem = ({
  heading,
  address,
  address2,
  number1,
  number2,
  mail1,
  mail2,
}) => {
  return (
    <div className={styles.contactAddressItem}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {address && <div className={styles.address}>{address}</div>}
      {address2 && <div className={styles.address}>{address2}</div>}
      {number1 && (
        <div className={styles.number}>
          <a href={`to:${number1}`}>+91 {number1}</a>
        </div>
      )}
      {number2 && (
        <div className={styles.number}>
          <a href={`to:${number2}`}>+91 {number2}</a>
        </div>
      )}
      {mail1 && (
        <div className={styles.number}>
          <a href={`mailto:${mail1}`}>{mail1}</a>
        </div>
      )}
      {mail2 && (
        <div className={styles.number}>
          <a href={`mailto:${mail2}`}>{mail2}</a>
        </div>
      )}
    </div>
  );
};
export default ContactAddressItem;
