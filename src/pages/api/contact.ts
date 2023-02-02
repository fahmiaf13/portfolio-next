import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;
  console.log(req);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "fahmicogs13@gmail.com",
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: `mail sent successfully ${name}` });
    console.log(name);
  } catch (error) {
    res.status(500).json({ message: `Error sending email ${name}` });
  }
};
