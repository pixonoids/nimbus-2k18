var express=require('express');
var app=express();
var User=require('./userSchema.js');
var Bill=require('./billSchema.js');
var bodyParser=require('body-parser');
app.use(bodyParser.json({strict:false}));
app.use(bodyParser.urlencoded({extended:false}));

var mongoose=require('mongoose');
 mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/nimbus",{useMongoClient: true});

app.use(express.static(__dirname));
var multer=require('multer');
var storage=multer.diskStorage({
     destination:function(req,file,cb){
     cb(null,__dirname +"/uploads");},
     filename:function(req,file,cb){
     var extArray = file.mimetype.split("/");
     var extension = extArray[extArray.length - 1];
     var filename=file.originalname+'-'+Date.now()+ "."+ extension;
     req.body.billpic=filename;
     console.log(filename);
     //eventEmitter.emit('fileevent',{req:req,filename:filename});
    cb(null,filename);
   }
});
var i=0;
var upload=multer({storage:storage});
app.post('/billadd',upload.single('billpic'),function (req,res){
  console.log('divyansh');
  var data=req.body;
  console.log(req.body.billpic);
  var obj={
    memo:data.memo,
    addr:data.addr,
    team:data.team,
    purpose:data.purpose,
    amt:data.amt,
    billpic: req.body.billpic
  }
  var bill=new Bill(obj);;
  bill.save(function(err,bill,numAffected){
     console.log(numAffected);
      if(err){
        console.log(err);
        res.send('500');
      }
       else{
       i++;
       console.log("added",bill);
       res.send(bill);
      }
  });
});
app.get('/',function (req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get('/about',function (req,res){
  res.sendFile(__dirname+"/about.html");
});
app.get('/events',function (req,res){
  res.sendFile(__dirname+"/events.html");
});
app.get('/contact',function (req,res){
  res.sendFile(__dirname+"/contact.html");
});
app.get('/register',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/register.html");
});
app.get('/sponsors',function (req,res){
  res.sendFile(__dirname+"/sponsors.html");
});
app.get('/billadd',function (req,res){
  res.sendFile(__dirname+"/billentry.html");
});

app.get('/billdata',function(req,res){
      console.log('hello');
      Bill.find({},function(err,doc){
         console.log(doc);
         res.send(doc);
      })
});
app.get('/useradd',function (req,res){
  res.sendFile(__dirname+"/registered.html");
});
app.get('/data',function(req,res){
      console.log('hello');
      User.find({},function(err,doc){
         console.log(doc);
         res.send(doc);
      })
});
app.get('/billshow',function (req,res){
  res.sendFile(__dirname+"/bill.html");
});
app.post('/adduser',function (req,res){
  var data=req.body;
  var user=new User(data);
  console.log(user);
  user.save(function(err,user,numAffected){
  if(err){
    console.log(err);
        res.send('500');
      }
   else{
    console.log("added",user);
    res.send(user);
   }
});
});

app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
});
