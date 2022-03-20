const { query } = require('express');
var express = require('express')
var app= express ()

app.use(express.static(__dirname+'/public'));

var adder=function(num1,num2){
    var result=num1+num2;
    return result
}

app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('hit by '+username);
    res.send("hello! "+username);
})

app.get('/adder',function(req,res){
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2);
    res.send('The result is: '+result)
})

var port=3000;
app.listen(port)
console.log('listening port: '+port)