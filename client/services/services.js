angular.module('app.service',[])
	.factory('Song', ['$http',function($http){
		return {
			get: function(callback){
				$http.get('/api/songs')
					.success(function(response){
						callback(null, response);
					});
			},
			set:function(id,song, callback){
				$http.put('/api/songs/'+id,song)
					.success(function(response){
						callback(null, response);
					});
			},
			add:function(song, callback){
				$http.post('/api/songs', song)
					.success(function(response){
						callback(null, response);
					});
			},
			delete:function(id, callback){
				$http.delete('/api/songs/'+id)
					.success(function(response){
						callback(null, response);
					});
			}
		}
	}])