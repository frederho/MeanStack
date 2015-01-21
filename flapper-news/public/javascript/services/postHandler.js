angular.module('flapperNews.services',[])
	.factory('postsHandler', [function(){
		var o = [{
			title: 'test', 
			link: 'www.sol.no',
			upvotes: 0
		}];

		var getPosts = function (){
			return o;
		};
		
		var addNewPost = function (post) {
			if(!post.title || post.title ==="") {return o;}
			o.push(post);
			return o;
		};

		return {
			'getPosts': getPosts,
			'addPost': addNewPost
		};
	}]);