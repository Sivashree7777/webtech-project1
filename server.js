var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
http.createServer(function(request, response) {
    var data1 = '';
         
	request.on('data', function(chunk) { data1 += chunk; });
        request.on('end', function() {
            var name = querystring.parse(data1)["username"];
            console.log(name);
            var email = querystring.parse(data1)["email"];
            console.log(email);
            var phonenumber = querystring.parse(data1)["phonenumber"];
            console.log(phonenumber);
            var doctorname = querystring.parse(data1)["doctorname"];
            console.log(doctorname);
            var reason= querystring.parse(data1)["reason"];
            console.log(reason);
            var date= querystring.parse(data1)["date"];
            console.log(date);
            var time= querystring.parse(data1)["time"];
            console.log(time);
    
            if (request.url === '/login') {
                module.authenticateUser(name, email, response);
            } else if (request.url === '/save') {
                module.saveUser(name, email, phonenumber, doctorname, reason, date, time, response);
            } else {
                console.log("In else");
            }
            
        });
   
}).listen(3000);
console.log("Server started");