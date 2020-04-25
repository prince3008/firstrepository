const express = require("express");
const app = express()
var nodemailer = require('nodemailer');
const cors = require("cors");
const multer = require("multer");
var otpGenerator = require('otp-generator');
var bodyparser = require('body-parser');
const port = 8000;
const mongoose = require("mongoose");
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
  console.log("connection succeeded");
})
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/Raktadan");
app.listen(port, () => {
  console.log("Welcome");
});
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(cors());


//Models
var userModel = mongoose.model("user", new mongoose.Schema({
  name: String,
  email: String,
  Address: String,
  phone: Number,
  pwd: String,
  cpwd:String,
  bgr: String,
  weight: Number
}));


app.post("/addUser", (req, res) => {
  var newuserModel = new userModel({
    name: req.body.name,
    email: req.body.email,
    Address: req.body.Address,
    phone: req.body.phone,
    pwd: req.body.pwd,
    cpwd: req.body.cpwd,
    bgr: req.body.bgr
  });
  if (newuserModel.pwd == newuserModel.cpwd) {
    console.log(newuserModel);
    console.log("Record inserted Successfully");
    newuserModel.save();
    res.send(true);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pjodhani0712@gmail.com',
        pass: 'pjodhA0712'
      }
    });

    var mailOptions = {
      from: 'pjodhani0712@gmail.com',
      to: newuserModel.email,
      subject: 'Hello' + "," + newuserModel.name,
      text: 'Your Account for RAKTADAN is registered succesfully!\n Thank you for registered.\nHave a good life ahead.\n' + newuserModel
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
});


app.post("/checkUser", (req, res) => {
  console.log(req.body);
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (user.pwd == req.body.pwd) {
      console.log("true");
      res.send(true);
    }
    else {
      console.log("false");
      res.send(false);
    }
  });
});

app.post("/getData", (req, res) => {
  console.log(req.body);
  userModel.findOne({ email: req.body.eamil }, (err, user) => {
    console.log(user);
    res.send(user);
  });
});

/*----------------------camp---------------------*/

var campModel = mongoose.model("camp", new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dno: Number,
  ps: String,
  date: Date,
  comment: String
}));

app.post("/addCamp", (req, res) => {
  var newcampModel = new campModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dno: req.body.dno,
    ps: req.body.ps,
    date: req.body.date,
    comment: req.body.comment
  });
  console.log(newcampModel);
  console.log("Record inserted Successfully");
  newcampModel.save();
  res.send(true);
});
/*--------------------contact-------------*/
var contactModel = mongoose.model("contact", new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  query: String
}));
app.post("/addCamp", (req, res) => {
  var newcontactModel = new contactModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    query: req.body.query
  });
  console.log(newcontactModel);
  console.log("Record inserted Successfully");
  newcontactModel.save();
  res.send(true);
});
/*-------------donate---------*/
var donateModel = mongoose.model("donate", new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  bgo: String,
  city: String,
  date: Date,
  query: String
}));
app.post("/addDonate", (req, res) => {
  var newdonateModel = new donateModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    bgo: req.body.bgo,
    city: req.body.city,
    date: req.body.date,
    sug: req.body.sug
  });
  console.log(newdonateModel);
  console.log("Record inserted Successfully");
  newdonateModel.save();
  res.send(true);
});
/*------------request------------------*/
var requestModel = mongoose.model("request", new mongoose.Schema({
  name: String,
  mobile: String,
  bgroup: String,
  city: String,
  hospital: String,
  doctor: String,
  rdate: Date
}));

app.post("/reqUser", (req, res) => {
  var newrequestModel = new requestModel({
    name: req.body.name,
    mobile: req.body.mobile,
    bgroup: req.body.bgroup,
    city: req.body.city,
    hospital: req.body.hospital,
    doctor: req.body.doctor,
    rdate: req.body.rdate
  });
  
    console.log(newrequestModel);
    console.log("Record inserted Successfully");
   // newrequestModel.save();
    res.send(true);

    var MongoClient = require('mongodb').MongoClient;
     var url = "mongodb://127.0.0.1:27017/Raktadan";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Raktadan");
      var query = { bgr : newrequestModel.bgroup };
      dbo.collection("users").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        /*-------------mail-----------*/
        var i = 0;
        for(i in result){
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'pjodhani0712@gmail.com',
              pass: 'pjodhA0712'
            }
          });
      
          var mailOptions = {
            from: 'pjodhani0712@gmail.com',
            to: result.email[i],
            subject: 'Hello' + "," + result.name[i],
            text: 'Your request for blood is registered'
          };
          i++;
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        
        /*-------------mail over-----------*/
        db.close();
      });
    });
});



/*--------------------retrieve data from database-------------*/
app.get("/dataUser", (req, res) => {
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Raktadan";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Raktadan");  
  var query = { email : "hepin@gmail.com" };
  dbo.collection("users").find(query).toArray(function(err, result) {  
    if (err) throw err;
    console.log(result);
    res.send(true);
    db.close();
  });
});
});