angular.module('flapperNews.controllers')
.controller('CommentsCtrl', [
	'$stateParams',
	'postsHandler',	function($stateParams, postsHandler){
		var vm = this;
		vm.body = '';
		
		vm.upvoteComment = function (comment){
			comment.upvotes += 1;
		};

		var onPost = function (response){
			vm.post = response.data;
			console.log(response);
		};

		var onError = function (error) {
			console.log(error.statusText);
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

		postsHandler.getPost($stateParams.id).then(onPost, onError);
	}]);