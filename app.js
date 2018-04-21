var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var Location=require('./Location.model');
var Weather=require('./Weather.model');
var Tour=require('./Tour.model');
var Travel=require('./Travel.model');




mongoose.connect('mongodb://localhost/city_details');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   
   extended:true

}));





//get tour places details by city name



app.get('/location/:name',function(req,res){

console.log('getting location by name');

Location.findOne({

		name:req.params.name
	})
	.exec(function(err,Location){
     if(err){

     	res.send('error occured');
     }else{

     	res.send(Location);
     }

	});

});


//get tour places details by city name

app.get('/tour/:name',function(req,res){

console.log('getting tour_places by name');

Tour.findOne({

		name:req.params.name
	})
	.exec(function(err,tour){
     if(err){

     	res.send('error occured');
     }else{

     	res.send(tour);
     }

	});

});



//get weather_info by city name

app.get('/weather/:name',function(req,res){

console.log('getting weather_info by city name');

Weather.findOne({

		name:req.params.name
	})
	.exec(function(err,weather){
     if(err){

     	res.send('error occured');
     }else{

     	res.send(weather);
     }

	});

});




//get travel services info by city name

app.get('/travel/:name',function(req,res){

console.log('getting travel services info by city name');

Travel.findOne({

		name:req.params.name
	})
	.exec(function(err,travel){
     if(err){

     	res.send('error occured');
     }else{

     	res.send(travel);
     }

	});

});




//post city location details by city name

app.post('/location',function(req,res){

var newLocation=new Location();

newLocation.name=req.body.name;
newLocation.location=req.body.location;



newLocation.save(function(err,location){


	if(err){

   res.send('error saving data');

	}else{


	

		res.send(location);
	}
});



});






//post city weather details by city name

app.post('/weather',function(req,res){

var newWeather=new Weather();

newWeather.name=req.body.name;
newWeather.weather=req.body.weather;



newWeather.save(function(err,weather){


	if(err){

   res.send('error saving data');

	}else{


	

		res.send(weather);
	}
});



});




//post tour places details by city name

app.post('/tour',function(req,res){

var newTour=new Tour();

newTour.name=req.body.name;
newTour.tour_places=req.body.tour_places;



newTour.save(function(err,tour){


	if(err){

   res.send('error saving data');

	}else{


	

		res.send(tour);
	}
});



});





//post travel services details by city name

app.post('/travel',function(req,res){

var newTravel=new Travel();

newTravel.name=req.body.name;
newTravel.travel=req.body.travel;



newTravel.save(function(err,travel){


	if(err){

   res.send('error saving data');

	}else{


	

		res.send(travel);
	}
});



});


//update location details by city name



app.put('/location',function(req,res)
	{
		Location.findOneAndUpdate({

           name:req.body.name

		},{$set:{location:req.body.location}},
          {upsert:true},
          function(err,location){

         if(err){

         	console.log('error occured');
         }else
         {
         	
         	res.send(location);
         }


          
		});

   


	});



//update weather details by city name



app.put('/weather',function(req,res)
	{
		Weather.findOneAndUpdate({

           name:req.body.name

		},{$set:{weather:req.body.weather}},
          {upsert:true},
          function(err,weather){

         if(err){

         	console.log('error occured');
         }else
         {
         	
         	res.send(weather);
         }


          
		});

   


	});





//update tour places details by city name



app.put('/tour',function(req,res)
	{
		Tour.findOneAndUpdate({

           name:req.body.name

		},{$set:{tour_places:req.body.tour_places}},
          {upsert:true},
          function(err,tour){

         if(err){

         	console.log('error occured');
         }else
         {
         	
         	res.send(tour);
         }


          
		});

   


	});






//update location details by city name



app.put('/travel',function(req,res)
	{
		Travel.findOneAndUpdate({

           name:req.body.name

		},{$set:{travel:req.body.travel}},
          {upsert:true},
          function(err,travel){

         if(err){

         	console.log('error occured');
         }else
         {
         	
         	res.send(travel);
         }


          
		});

   


	});




//delete location by city name


app.delete('/location',function(req,res){

Location.findOneAndRemove({

 name:req.body.name

},function(err,location){

	if(err)
	{
		res.send('error deleting');
	}else{

		
		res.send(location);
	}
}


);

});


//delete weather details by city name


app.delete('/weather',function(req,res){

Weather.findOneAndRemove({

 name:req.body.name

},function(err,weather){

	if(err)
	{
		res.send('error deleting');
	}else{

		
		res.send(weather);
	}
}


);

});




//delete tour places details by city name


app.delete('/tour',function(req,res){

Tour.findOneAndRemove({

 name:req.body.name

},function(err,tour){

	if(err)
	{
		res.send('error deleting');
	}else{

		
		res.send(tour);
	}
}


);

});





//delete travel services info by city name


app.delete('/travel',function(req,res){

Location.findOneAndRemove({

 name:req.body.name

},function(err,travel){

	if(err)
	{
		res.send('error deleting');
	}else{

		
		res.send(travel);
	}
}


);

});







var port=8080;
app.listen(port,function(){

	console.log('app listening on port'+port);
});