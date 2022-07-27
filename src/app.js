const express = require('express');

const { apiRouter } = require("./routes");
const { sequelize } = require('./db')
const path = require("path");

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded())
app.use('/api', apiRouter)

require('dotenv').config({ path: path.resolve(__dirname, '.env') })
app.use('*', (err, req, res, next) => {
    console.log(err)

    res
        .status(err.status || 400 )
        .json(err);
});

// { alter: true }
sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT, err => err ? console.log(err) : console.log(`Listen ${PORT} ...`))
    })
    .catch(console.log)
