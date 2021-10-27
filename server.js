// import modules

import express from 'express';
import * as myFavColors from './data/fav-colors.js';
// Create Express app

const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
// Mount Middleware (app.use)

// Mount routes
app.get('/', function (req, res) {
	res.redirect('/home');
});

app.get('/home', function (req, res) {
	res.send('<h1>Home page</h1>');
});

app.get('/colors', function (req, res) {
	myFavColors.find({}, function (error, colors) {
		res.render('colors/index.ejs', {
			colors: colors,
			error: error,
		});
	});
});

// Tell the app to listen on port 3000

app.listen(3000, function () {
	console.log('Listening on port 3000');
});
