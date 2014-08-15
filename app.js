var express = require('express'),
	app = express();

app.configure( function() {
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
	app.use(express.static(__dirname + "/public"));
});

app.listen(5000);
console.log("Server started and listening on port 5000");


