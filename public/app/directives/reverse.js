angular.module('reverseDirective', [])

.filter('reverse', function(){
	return function(item){
		return item.slice().reverse();
	}
});