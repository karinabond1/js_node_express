var port = 5000;
var express = require('express');
var bodyParser = require('body-parser');

var values = [];


var server = express();
server.use(bodyParser.json());
server.use('/',express.static('public'));

server.get('/test.json', (req, res) => {
    res.json({values});
});

server.all('/all_data',(req,res)=>{
    res.send('all data ok');
});

server.post('/set_test', (req, res) => {
    console.log(req.body);
    
    res.json(req.body);
    values.push(req.body);
    //console.log(values.length);
    //for(var i=0;i<values.length;i++){
        //console.log("here"+values[i].data);
    //}
    
});

server.listen(port, ()=>{
    console.log("Server ran on port:", port);
});