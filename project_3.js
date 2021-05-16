var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
if (req.url == '/fileupload') {
var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
var oldpath = files.filetoupload.path;
var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
fs.rename(oldpath, newpath, function (err) {
if (err) throw err;
res.write('File uploaded!');
res.end();
});
});
} else {
		
res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<head></head><body style="background-image: url('https://wallpapercave.com/wp/wp5305858.jpg'); background-size: cover">`);
  res.write('<div style="text-align: center; margin: 160px; font-size:2em;"><h1 style="color: rgba(230,169,1,.7)">Upload File Here</h1>');
res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" style="margin-top: 10px;">');
res.write('</form>');
	res.write('</div>');
	        res.write('</body>');

\
	
return res.end();
}
}).listen(8080);