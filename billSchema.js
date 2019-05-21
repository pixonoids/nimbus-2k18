var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var billSchema=new Schema({
	  memo:{type:Number,required:true},
		addr:{type:String,required:true},
		team:{type:String,required:true},
		purpose:{type:String,required:true},
	  amt:{type:Number,required:true},
		billpic:{type:String,required:true}
});

var Bill=mongoose.model('Bill',billSchema);
module.exports=Bill;
