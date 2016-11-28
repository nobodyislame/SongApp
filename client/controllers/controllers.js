angular.module('app.controller',[])
	.controller('HomeCtrl', ['$scope','$http', 'Song',function($scope, $http, Song){
		
		$scope.editmode = false;

		$scope.newsong={
			
		};

		$scope.loadPage = function(){
			Song.get(function(err, result){
				if(err){
					throw err;
				}
				console.log(result);
				$scope.songs = result;
			});
		}
		

		$scope.update = function(song){
			console.log(song);
			Song.set(song._id, song, function(err, result){
				if(err){
					throw err;
				}
				console.log('updated');
				if($scope.editmode){
					$scope.editmode = !$scope.editmode;
					$scope.newsong={};
					$scope.loadPage();
				}
			});
		}

		$scope.saveSong = function(){
			Song.add($scope.newsong, function(err, result){
				if(err){
					throw err;
				}
				$scope.newsong={};
				$scope.loadPage();
			});
		}

		$scope.removeSong = function(id){
			Song.delete(id, function(err, result){
				if(err){
					throw err;
				}
				$scope.loadPage();
			});
		}

		$scope.editSong = function(song){
			$scope.editmode = true;
			angular.copy(song, $scope.newsong);
			console.log($scope.newsong);
		}

		$scope.cancel =function(){
			$scope.newsong = {};
			$scope.editmode = !$scope.editmode;
			$scope.loadPage();
		}

		$scope.loadPage();
	}])

	.controller('PlaybackCtrl', function($scope){
		console.log("in playback control");
	})

	.controller('DetailsCtrl', ['$scope', 'Song', function($scope, Song){
		
		Song.get(function(err, result){
			if(err){
				console.log(err);
			}

			$scope.data = result;

			$scope.details = {};

			console.log($scope.details);
			for(var i=0;i<$scope.data.length;i++){
				if($scope.details==={}){
					$scope.details[$scope.data[i].artist] = 1;
				}

				if($scope.details[$scope.data[i].artist]===undefined || $scope.details[$scope.data[i].artist]===null){
					$scope.details[$scope.data[i].artist] = 1;
				}

				else{
					$scope.details[$scope.data[i].artist]+=1;
				}
			}
		});
	}]);