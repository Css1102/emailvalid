require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/send-otp', async (req, res) => {
  try {
    const mobileNumber = req.body.mobileNumber;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const response = await axios.get('https://www.fast2sms.com/dev/bulk', {
      params: {
        authorization: process.env.FAST2SMS_API_KEY,
        variables_values: `Your OTP is ${otp}`,
        route: 'otp',
        numbers: mobileNumber
      }
    });
    res.json({ success: true, message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});