const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
const port = 4000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Twilio credentials
const accountSid = 'AC0edeae84e74685fde38cef25341646a2';
const authToken = 'a89b954f0e426d58150b62b4bc091104';

// Initialize Twilio client
const client = twilio(accountSid, authToken); 


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

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
        from: '+12058394048',  // Your Twilio phone number
        to: '+919160178492',   // The recipient's phone number
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

const messageBody = `New form submission:\n\n` +
`First Name: n` +
`Last Name: n` +
`Phone Number:n` +
`Description: sd`;
sendMessage("POOOO");


module.exports = app;


