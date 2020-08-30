const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());


// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get
('/',(req,res) => 
    {
        res.send('We are on home');
    }    

);



mongoose.connect
(
    process.env.DB_CONNECTION,

    {   useNewUrlParser: true ,
    
        useUnifiedTopology: true
    },
    
    () => console.log('connected to DB')
);

app.listen(3000);