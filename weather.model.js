var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var WeatherSchema=new Schema({

	name:String,
	weather:String
	
});

module.exports=mongoose.model('Weather',WeatherSchema);