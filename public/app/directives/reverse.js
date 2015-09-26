angular.module('reverseDirective', [])

.filter('reverse', function(){
	return function(item){
		if (!item || !item.length) { return; }
		return item.slice().reverse();
	}
});
