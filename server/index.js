// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/otp-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for OTP collection
const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
});

const OTP = mongoose.model('OTP', otpSchema);

// Route to handle sending OTP
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
  
    // TODO: Send OTP to email (you'll need to configure nodemailer)
  
    // Save OTP to the database
    const newOTP = new OTP({ email, otp });
    await newOTP.save();
  
    res.json({ success: true });
  });


// Route to handle OTP verification
app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
  
    // Check if the OTP matches the one in the database
    const storedOTP = await OTP.findOne({ email, otp });
  
    if (storedOTP) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  });

  // TODO: Send OTP to email (you'll need to configure nodemailer)

  // Save OTP to the database
  const newOTP = new OTP({ email, otp });
  await newOTP.save();

  res.json({ success: true });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
