var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var LocationSchema=new Schema({

	name:String,
	location:String
	
});

module.exports=mongoose.model('Location',LocationSchema);