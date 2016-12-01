var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var $ = require('jquery');
var engine = require('ejs-mate');
var path = require('path');

app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('js', __dirname + '/js');

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.join(__dirname + '/css')));
app.use('/js', express.static(path.join(__dirname + '/js')));
app.use('/images', express.static(path.join(__dirname + '/images')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
    res.render('index');
});

app.post('/', function(req, res, next){

    var transporter = nodemailer.createTransport('smtps://mckade.contact%40gmail.com:mckade.contact123@smtp.gmail.com');

    var mailOptions = {
        from: req.body.email,
        to: 'mckade.hermansen@gmail.com',
        subject: 'Contact Form Submition',
        html: '<div>' + 'First Name: ' + req.body.first + '</div>'
        + '<div>' + 'Last Name: ' + req.body.last + '</div>'
        + '<div>' + 'Message: ' + req.body.message + '</div>'
        + '<div>' + 'Email: ' + req.body.email + '</div>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

});

app.listen(3000, function(){
  console.log('application running at localhost on port 3000');
});
