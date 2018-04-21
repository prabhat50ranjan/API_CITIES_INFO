var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var TourSchema=new Schema({

	name:String,
	tour_places:String
	
});

module.exports=mongoose.model('Tour',TourSchema);