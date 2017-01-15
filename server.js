var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());

Song = require('./models/Song');

mongoose.connect('mongodb://localhost/songstore');

app.get('/api/songs', function(req, res){
	Song.getSongs(function(err, songs){
		if(err){
			throw err;
		}
		res.json(songs);
	});
});

app.get('/api/songs/:_id', function(req, res){
	var id = req.params._id;
	Song.getSongById(id, function(err, song){
		if(err){
			throw err;
		}
		res.json(song);
	});
});

app.post('/api/songs', function(req, res){
	var song = {};
	song.song = req.body.song;
	song.artist = req.body.artist;
	song.url = req.body.url;
	Song.addSong(song, function(err, song){
		if(err){
			throw err;
		}
		res.json(song);
	});
});

app.put('/api/songs/:_id', function(req, res){
	var id = req.params._id;
	var song = req.body;
	Song.updateSong(id,song,{}, function(err, song){
		if(err){
			throw err;
		}
		res.json(song);
	});
});

app.delete('/api/songs/:_id', function(req, res){
	var id = req.params._id;
	Song.removeSong(id, function(err, song){
		if(err){
			throw err;
		}
		res.json(song);
	});
});

app.listen(3000);

