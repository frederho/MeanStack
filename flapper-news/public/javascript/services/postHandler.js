angular.module('flapperNews.services',[])
	.factory('postsHandler', ['$http', function($http){
		var o = [];

		var getPosts = function (){
			return $http.get('/posts')
			.success(function (response) {
				var posts = response.data;
				return posts;
			});
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