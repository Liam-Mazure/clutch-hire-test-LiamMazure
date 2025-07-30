const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.EXTERNAL_API_KEY

let users = [];

app.post('/api/users', async (req, res) => {
  try{
    console.log("User added: ", newUser)
    if(!API_KEY){
      console.error("API_KEY is missing")
    }
    const externalRes = await axios.post(
      `https://dev-api-api.hiring-test.experientialpreview.com/api/lead/${API_KEY}`,
      newUser,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("sending to api:", newUser)
    res.status(201).json({mes: 'submitted to API', data: externalRes.data})
  } catch (error) {
    console.error('External API error:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Failed to submit to external API' });
  }
})

app.get('/api/users',(req, res) => {
    res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})