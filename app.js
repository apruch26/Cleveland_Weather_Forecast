var request = require('request');
var json2csv = require('json2csv');
var fs = require('fs');


var url = 'http://api.openweathermap.org/data/2.5/forecast?q=cleveland,oh&APPID=a0472e6063198c88952f86f836355ae1&units=imperial';
var CLEforecast = [];
request({url:url,json:true},function(error,response,body){
	body.list.forEach(function(measure){
		//console.log(measure.dt_txt+' '+measure.main.temp);
		var data = {Temperature_Date: measure.dt_txt,Temperature: measure.main.temp};
		//console.log(data);
		CLEforecast.push(data);
	});
	//console.log(CLEforecast)
	json2csv({data:CLEforecast},function(error,csv){
		fs.writeFile('CLEforecast.csv',csv);
	});
});