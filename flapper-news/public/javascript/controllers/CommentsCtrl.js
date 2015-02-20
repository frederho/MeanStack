angular.module('flapperNews.controllers').controller('CommentsCtrl', [
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