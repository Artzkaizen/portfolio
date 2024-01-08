const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));

app.post("/send-email", (req, res) => {
    const { name, email, subject, message } = req.body;

    // Replace these values with your email and SMTP server details
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    const mailOptions = {
        from: `${name}: ${req.body.email}`,
        to: process.env.USER_EMAIL_SEND,
        subject: `New Contact Form Submission: ${subject}`,
        text: `${req.body.message}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ message: "Error sending email" });
        } else {
            console.log("Email sent:", info.response);
            res.json({ message: "Email sent successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
