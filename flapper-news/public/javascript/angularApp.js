angular.module('flapperNews', ['flapperNews.controllers','flapperNews.services', 'ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
    })
    .state('posts', {
	  url: '/posts/{id}',
	  templateUrl: '/posts.html',
	  controller: 'CommentsCtrl',
	  controllerAs: 'vm'
	});

  $urlRouterProvider.otherwise('home');
}]);