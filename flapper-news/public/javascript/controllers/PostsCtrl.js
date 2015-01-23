angular.module('flapperNews.controllers',[])
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
				console.log("Value updated");
				post += 1;
			}, onError);
		};

		//initialize controller
		updatePosts();

	}]).controller('CommentsCtrl', [
	'$stateParams',
	'postsHandler',	function($stateParams, postsHandler){
		var vm = this;
		vm.body = '';
		vm.post = postsHandler.getPost($stateParams.id);

		vm.upvoteComment = function (comment){
			comment.upvotes += 1;
		};

		vm.addComment = function () {
			var newComment = {
				body: vm.body,
				author: 'user',
				upvotes: 0
			};
			vm.post.comments.push(newComment);
			vm.body = '';

		};
	}]);