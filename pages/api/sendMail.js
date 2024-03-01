
import nodemailer from 'nodemailer';
// import sendmailTransport from 'nodemailer-sendmail-transport';
import styles from "../api/mail.module.css"
import img1 from "pages/api/finalNavbarLogo.png";
export default async function handler(req, res) {
    console.log('API route hit:', req.method, req.url);
  console.log('Request body:', req.body);
  if (req.method === 'POST') {
      // Assuming req.body contains the form data
      const { fullName, email, Phone,Whatsapp,Address,Pincode,City,
        District,State, Dealer_Name,Category,Product_Name,sheets,No_of_thickness} = req.body;
        const { Invoice_File, Invoice_File1, Invoice_File2, Invoice_File3 } = req.body;
        const attachments = [];

        const addAttachment = (file, filename) => {
          if (file) {
            const decodedFile = Buffer.from(file, 'base64');
            attachments.push({ filename, content: decodedFile});
            console.log(`Attachment added: ${filename}`);
            console.log(decodedFile.toString()); 
          }
        };
        addAttachment(Invoice_File, 'Invoice_File.pdf');
        addAttachment(Invoice_File1, 'Invoice_File1.pdf');
        addAttachment(Invoice_File2, 'Invoice_File2.pdf');
        addAttachment(Invoice_File3, 'Invoice_File3.pdf');  
      
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
  secure: false, 
            auth: {
              user: 'jaykalariya.humbee@gmail.com',
              pass: 'wecdoqzwxfcifkss',
            },
          });
      const mailOptions = {
        from: 'jaykalariya.humbee@gmail.com', // sender address
        to: 'jaykalariya.humbee@gmail.com',   // receiver address
        subject: 'New Form Submission of Claim Warranty By user', // Subject line
        // html:`
        // <div class="${styles.emailContainer}">
        // <h2>New Form Submission</h2>
        // <p><strong>Full Name:</strong> ${fullName}</p>
        // <p><strong>Email:</strong> ${email}</p>
        // <p><strong>Phone:</strong> ${Phone}</p>
        // <p><strong>Whatsapp Number:</strong> ${Whatsapp}</p>
        // <p><strong>Address:</strong> ${Address}</p>
        // <p><strong>Pincode Number:</strong> ${Pincode}</p>
        // <p><strong>Phone:</strong> ${Phone}</p>
        // <p><strong>Whatsapp Number:</strong> ${Whatsapp}</p>
        // <p><strong>Phone:</strong> ${Phone}</p>
        // <p><strong>Whatsapp Number:</strong> ${Whatsapp}</p>
        // <div class="${styles.customSection}">
        //   <img src="${img1}" alt="Your Logo" class="${styles.logo}">
        // </div>
        // </div>
        // `
        text: `
          Full Name: ${fullName}
          Email: ${email}
          Phone: ${Phone}
          Whatsapp: ${Whatsapp}
          Address: ${Address}
          Pincode: ${Pincode}
          City: ${City}       
          District: ${District}
          State: ${State}
          Dealer_Name: ${Dealer_Name}
          Category: ${Category ? Category.name : ''}
          Product_Name: ${Product_Name ? Product_Name.name : ''}
          sheets: ${sheets}
          No_of_thickness: ${No_of_thickness ? No_of_thickness.name : ''}
          Invoice_File: ${Invoice_File}
        `,
        attachments,
        // attachments: [
        //   {
        //     filename: 'invoice.pdf', // Adjust the filename as needed
        //     content: req.body.Invoice_File, // Assuming req.body.Invoice_File contains the PDF data
        //     encoding: 'base64'
        //   }
        // ]
        // attachments,
      };
      // if (Invoice_File) {
      //   mailOptions.attachments.push({ filename: 'Invoice_File.pdf', content: Invoice_File, encoding: 'base64' });
      // }
      // if (Invoice_File1) {
      //   mailOptions.attachments.push({ filename: 'Invoice_File1.pdf', content: Invoice_File1, encoding: 'base64' });
      // }
      // if (Invoice_File2) {
      //   mailOptions.attachments.push({ filename: 'Invoice_File2.pdf', content: Invoice_File2, encoding: 'base64' });
      // }
      // if (Invoice_File3) {
      //   mailOptions.attachments.push({ filename: 'Invoice_File3.pdf', content: Invoice_File3, encoding: 'base64' });
      // }
      // Repeat the above block for other attachments
      
      console.log(mailOptions); // Log attachments
      try {
        // Send the email
        await transporter.sendMail(mailOptions);
        
        // Respond with a success message
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        // Respond with an error message
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      // Respond with a 404 for non-POST requests
      res.status(404).json({ message: 'Not Found' });
    }
  }