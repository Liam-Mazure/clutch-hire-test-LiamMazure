require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.EXTERNAL_API_KEY

const users = []

app.post('/api/users', async (req, res) => {
  const userData = {
    first: req.body.first,
    last: req.body.last,
    company: req.body.company,
    phone: String(req.body.phone),
    email: req.body.email
  };
  console.log("received user data:",userData)
  users.push(userData)
  if(!API_KEY){
    console.error("API Key is missing")
  } else{
    console.log("Here is API Key: ", API_KEY)
  }
  try{
    const externalRes = await axios.post(
      `https://dev-api-api.hiring-test.experientialpreview.com/api/lead/${API_KEY}`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("sending to api:", userData)
    res.status(externalRes.status).json(externalRes.data);
  } catch (error) {
    console.error('External API error:');
    if(error.response){
      console.error("Status: ", error.response.status);
      console.error("Phone constr. : ", error.response.data.errors[0].constraints);
    } else{
      console.error(error.message);
    }
    res.status(500).json({ error: 'Failed to submit to external API' });
  }
})

app.get('/api/users',(req, res) => {
    res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})