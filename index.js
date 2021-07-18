
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const app=express();

// --------------------------------
require('dotenv').config();
// Connection to DataBase mongoose

// Use Body-Parser

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(morgan('tiny'))
// public paths for images and other extra components
// ....
// load all routes


//......
// Use to routes
app.use(cors({
    origin: process.env.CLIENT_URL
}))
// socket io

// ------------------------- 
//use urls

//...


// configuration for deploy
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Pagina no encontrada"
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
