var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var TravelSchema=new Schema({

	name:String,
	travel:String
	
});

module.exports=mongoose.model('Travel',TravelSchema);