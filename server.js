const { query } = require('express');
var express = require('express')
var app= express ()

app.use(express.static(__dirname+'/public'));

var username;
var password;
var signUp=function(input1,input2){
    username=input1;
    password=input2;
}
var logIn=function(input1,input2){
    if(input1==username && input2==password){
        return true;
    }
    else{
        return false;
    }
}

/*app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('hit by '+username);
    res.send("hello! "+username);
})*/

app.get('/signUp',function(req,res){
    var input1=req.query.username;
    var input2=req.query.password;
    signUp(input1,input2);
    console.log('Username: '+username+" Password: "+password)
    res.send('Username: '+username+" Password: "+password)
})

app.get('/logIn',function(req,res){
    var input1=req.query.username;
    var input2=req.query.password;
    if(logIn(input1,input2)){
        res.send("success")
    }
    else{
        res.send("fail")
    }
})

var port=3000;
app.listen(port)
console.log('listening port: '+port)