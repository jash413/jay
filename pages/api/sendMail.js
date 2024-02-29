// pages/api/sendMail.js

import nodemailer from 'nodemailer';
// import sendmailTransport from 'nodemailer-sendmail-transport';

export default async function handler(req, res) {
    console.log('API route hit:', req.method, req.url);
  console.log('Request body:', req.body);
  if (req.method === 'POST') {

      // Assuming req.body contains the form data
      const { fullName, email, Phone,Whatsapp,Address,Pincode,City,
        District,State, Dealer_Name,Category,Product_Name,sheets,No_of_thickness,Invoice_File,Invoice_File1,Invoice_File2,Invoice_File3} = req.body;
       
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
          Invoice_File1: ${Invoice_File1}
          Invoice_File2: ${Invoice_File2}
          Invoice_File3: ${Invoice_File3}
        `,
        attachments: [],
      };
      if (Invoice_File) {
        mailOptions.attachments.push({ filename: 'Invoice_File.pdf', content: Invoice_File, encoding: 'base64' });
      }
      
      if (Invoice_File1) {
        mailOptions.attachments.push({ filename: 'Invoice_File1.pdf', content: Invoice_File1, encoding: 'base64' });
      }
      
      if (Invoice_File2) {
        mailOptions.attachments.push({ filename: 'Invoice_File2.pdf', content: Invoice_File2, encoding: 'base64' });
      }
      
      if (Invoice_File3) {
        mailOptions.attachments.push({ filename: 'Invoice_File3.pdf', content: Invoice_File3, encoding: 'base64' });
      }

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