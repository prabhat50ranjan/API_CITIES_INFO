var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var CitySchema=new Schema({

	location:String,
	weather:String,
	description:String
});

module.exports=mongoose.model('City',CitySchema);