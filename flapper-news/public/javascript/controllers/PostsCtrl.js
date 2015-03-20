angular.module('flapperNews.controllers')
	.controller('PostsCtrl', ['postsHandler', function (postsHandler) {
		var vm = this;
		
		var resetPostModel = function () {
			vm.title = "";
			vm.link = "";

		};

		var onPosts = function (response){
			vm.posts = response.data;
		};

		var onError = function (error) {
			console.log(error.statusText);
		};

		var updatePosts = function() {
			postsHandler.getPosts()
			.then(onPosts, onError);


		};

		vm.addPost = function(){
			var newPost = {
				title: vm.title,
				link: vm.link,
				upvotes: 0,
				comments: []
			};
			postsHandler.addPost(newPost)
			.then(updatePosts, onError);
			resetPostModel();
		};

		vm.upvote = function(post){
			postsHandler.upvotePost(post)
			.then(function(post){
				post += 1;
			}, onError);
		};

		//initialize controller
		updatePosts();

	}]);