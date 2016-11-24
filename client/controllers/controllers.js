angular.module('app.controller',[])
	.controller('songCtrl', ['$scope','$http', 'Song',function($scope, $http, Song){
		
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

		$scope.loadPage();
	}]);