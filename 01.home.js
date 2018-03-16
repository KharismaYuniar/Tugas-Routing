// #2 error  404 not found

var http = require('http');
var fs =require('fs');


var server = http.createServer(function(req,res){
    console.log('Request : ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/home.html').pipe(res);      
    }

    else if(req.url === '/about' || req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/about.html').pipe(res);      
    }
    
    else if(req.url === '/index' || req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/bootstrap-full-slider/index.html').pipe(res);      
    }

    else if(req.url === '/kata1' || req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/kata1.html').pipe(res);      
    }

    else if(req.url === '/1' || req.url === '/'){
        res.writeHead(200, {'Content-type':'text/plain'});
        fs.createReadStream(__dirname+'/1.json').pipe(res);      
    }

     else {
    res.writeHead(404, {'Content-type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);
    }

    
});


server.listen(3200);
console.log('server aktif.listening port 3200.')