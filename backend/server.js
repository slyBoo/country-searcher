const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));

app.get('/countries/:name', async (req, res) => {
    const name = req.params.name;
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.send(data);
      console.log(data[0])
    } catch (error) {
      console.log(error);
      res.send(error);
    }
});

app.listen(8000)

