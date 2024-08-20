var express=require('express');

var app=express();
var port=3003;



app.listen(port,()=>{
    console.log('this page is running in port 3003');
});

app.get('/about',(req,res)=>{
    res.send('<a href="/aboutme">About Me</a>');
})

app.get('/',(req,res)=>{
    res.send('i am surya');
});

app.get('/user/:name',(req,res)=>{
    var username=req.params.name;
    res.send(`hello ${username}`);
})