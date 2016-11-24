angular.module('app.directive',[])
	.directive('rating', function(){
		return {
			restrict : 'EA',
			scope:{
				max : '=max',
				score : '=score',
				set : "&set",
				song : "=song"
			},
			templateUrl : 'templates/rating.html',
			link : function(scope, elements, attrs) {
				scope.updateStars = function(){
					
					var index;
					scope.stars=[];
					for(index=0;index<scope.max;index++){
						scope.stars.push({
							full:scope.score > index
						});
					}
				};

				scope.hover = function(index){
					scope.hoverIndex = index;
				};

				scope.stopHover = function(){
					scope.hoverIndex = -1;
				};

				scope.starClass = function(star, index){
					if(star.full && scope.hoverIndex===undefined || star.full && scope.hoverIndex ==-1){
						if(star.full){
							return "glyphicon glyphicon-star";
						}
						return "glyphicon glyphicon-star-empty";
					}
					if(scope.hoverIndex>=index){
						return "glyphicon glyphicon-star";
					}
					return "glyphicon glyphicon-star-empty";
					
				};

				scope.starColor = function(index){
					if(scope.hoverIndex>=index){
						return "rating-highlight";
					}
					return "rating-normal";
				};

				scope.setRating = function(index){
					scope.score = index+1;
					console.log(scope.score);
					var song = scope.song;
					song.score = scope.score;
					scope.set({song:song});
					scope.stopHover();
				};

				scope.$watch('score', function(newValue, oldValue){
					if(newValue !== undefined && newValue!=null){
						scope.updateStars();
					}				
				});

				

			}
		}
	})