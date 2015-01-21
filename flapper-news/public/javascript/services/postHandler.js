angular.module('flapperNews.services',[])
	.factory('postsHandler', [function(){
		var o = [{
			title: 'test', 
			link: 'www.sol.no',
			upvotes: 0,
			comments: [
			    {author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		  	]	
		}];

		var getPosts = function (){
			return o;
		};
		
		var addNewPost = function (post) {
			if(!post.title || post.title ==="") {return o;}
			o.push(post);
			return o;
		};

		var getPost = function (id) {
			return o[id];
		};

		return {
			'getPosts': getPosts,
			'addPost': addNewPost,
			'getPost': getPost
		};
	}]);