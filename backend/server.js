const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://bhawin_pakeria:ysl123love@cluster0.sz8zm.gcp.mongodb.net/test';
mongoose.connect(uri , { useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true});

// app.get('/', (req, res) => {
//    res.send('Hello World!');
// })

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
