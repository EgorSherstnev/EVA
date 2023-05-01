const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 7000

const app = express();


// app.get('/', (req, res) => {
//    res.send("Ева Работает")
// })

app.listen(PORT, () => console.log(`server startered on port ${PORT}`))