const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Twilio credentials
const accountSid = 'ACa2aee1ee0a25157a2477925f62f07bfe';
const authToken = '1203add9859a041abe1b307c76293856';

// Initialize Twilio client
const client = twilio(accountSid, authToken); 

// POST endpoint to handle form data
app.post('/userdata', (req, res) => {
  const { firstName, lastName, phoneNumber, description } = req.body;

  // Construct message body with formatted data
  const messageBody = `New form submission:\n\n` +
                      `First Name: ${firstName}\n` +
                      `Last Name: ${lastName}\n` +
                      `Phone Number: ${phoneNumber}\n` +
                      `Description: ${description}`;

    // You can perform further actions with the received data, such as saving it to a database
    sendMessage(messageBody);

    // Send a response (modify as needed)
    res.json({ message: 'Post created successfully' });
});

// Function to send message using Twilio
function sendMessage(postData) {
  typeof(postData);
    const message = {
        body: postData,
        from: '+19478004831',  // Your Twilio phone number
        to: '+919502810527',   // The recipient's phone number
    };
    

    // Send message using Twilio client
       client.messages.create(message)
        .then(() => console.log('SMS Sent Successfully'))
        .catch(error => console.error('SMS Not Sent:', error));
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Optionally, call sendMessage function here to send SMS
// sendMessage();


module.exports = app;
