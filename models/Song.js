var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
	song:{
		type:String,
		required:true
	},
	artist:{
		type:String,
		required:true
	},
	score:{
		type:Number,
		default:0
	}
});


var Song = module.exports = mongoose.model('Song', songSchema);

module.exports.getSongs = function(callback, limit) {
	Song.find(callback).limit(limit);
}

module.exports.getSongById = function(id, callback) {
	Song.findById(id, callback);
}

module.exports.addSong = function(song, callback) {
	Song.create(song, callback);
}

module.exports.updateSong = function(id, song, options, callback) {
	var query = {_id:id};
	var update = {
		song : song.song,
		artist : song.artist,
		score : song.score
	}

	Song.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeSong = function(id, callback){
	var query = {_id:id};
	Song.remove(query, callback);
}