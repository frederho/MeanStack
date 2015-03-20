angular.module('flapperNews.services',[])
	.factory('postsHandler', ['$http', function($http){

		var getPosts = function (){
			return $http.get('/posts')
			.success(function (response) {
				var posts = response.data;
				return posts;
			});
		};
		
		var addNewPost = function (post) {
			if(!post.title || post.title ==="") {return;}
			return $http.post('/posts', post)
			.success(function(response){
				var posts = response.data;
				return posts;
			});
		};

		var getPost = function (id) {
			return $http.get('posts/'+id)
			.then(function (response)
				{
					var post = response.data;
					return post;
				});
		};

		var upvotePost = function (post) {
			console.log(post._id);
			return $http.put('posts/' + post._id + '/upvote')
			.success(function(response){
				var reqResponse = response.data;
				return reqResponse;
			});
		};

		return {
			'getPosts': getPosts,
			'addPost': addNewPost,
			'getPost': getPost,
			'upvotePost' : upvotePost
		};
	}]);