var fs = require('fs')
  , gm = require('gm');

var threshold = {
	"night": 
		{ 
			"from": 0, 
			"to": 	10000
		},
	"morning": 
		{
			"from": 10000,
			"to": 	50000
		},
	"day": 
		{
			"from": 50000, 
			"to": 	500000
		}
}

process.argv.forEach(function (val, index, array) {
	if(index>1){
		checkDayOrNight(val);
	}
});

function checkDayOrNight(pic){
	gm(pic).color(function (err, c) {
		if(!err){
			for (var key in threshold) {
			   var obj = threshold[key];
			   if(c < obj["to"] && c > obj["from"]){
			   	console.log(pic + "= " + key);
			   }
			}
		}else{
			console.log("ERROR: "+err);
		}
	});
}