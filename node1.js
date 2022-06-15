var http= require('http');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write(<html><body>Hello World</body></html>)
        res.end()
    }
});
server.listen(5000);
console.log('NodeJs web server at 5000');
