var express = require('express');
const app = express();
var router = express.Router();
const mongoose = require('mongoose');


const User = require('../models/userModel')


mongoose.connect('mongodb+srv://tutobotAdmin:admin@tutobot.seu5hvm.mongodb.net/tutobot-users-details')
.then(()=>console.log("DB connectd"))
.catch(()=>console.log('Not Connectd'))



router.get('/getUsers', async (req, res) => {
  const users = await User.find();
  res.json(users);
})

router.post('/postUser', async (req, res) => {
  console.log(req.body)
  const {name, email, mobile, password} = req.body;
  const user = await User.create({
    name, email, mobile, password
  });
  user.save()
  // res.status(200).json(req.body);
  if(!user){
    console.log("Data not sent");
  }else{
    res.status(200).json({user});
    // console.log("Success");
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
