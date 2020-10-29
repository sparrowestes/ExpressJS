const express = require('express');
const path = require('path');
const fs = require ('fs');
const bodyParser = require ('body-parser');
let app = express();

// app.get('/',(req, res) => { 
//     res.send('Hello from the web server side...');
// });

app.use(express.urlencoded({}));

app.use(bodyParser.urlencoded({ extended: false}))

app.post('/contact-form', (req, res) => { 
    let obj = {name:req.body.name, email: req.body.email};
    fs.writeFileSync ('formsubmissions.json', JSON.stringify(obj));
    console.log(req.body.name);
    console.log(req.body.email);
    res.send('Thank you for your submission!');
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);

