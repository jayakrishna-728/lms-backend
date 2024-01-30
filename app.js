const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Twilio credentials
const accountSid = 'ACa2aee1ee0a25157a2477925f62f07bfe';
const authToken = '9d72287906ea550f501b3c73bc57ba6b';

const client = twilio(accountSid, authToken);

app.listen(port, () => {

});


function sendMessage(req, res) {
    const message = {
        body: 'Hello from your Twilio App!',
        from: '+19478004831',  // Your Twilio phone number
        to: '+919502810527', 
      };
    
      client.messages.create(message)
        .then(() => console.log('SMS Sent Successfully'))
        .catch(error => console.error('SMS Not Sent:', error));
    
      console.log(`Server is running on port ${port}`);

}
