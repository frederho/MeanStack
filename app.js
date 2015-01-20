angular.module('flapperNews', ['flapperNews.controllers','flapperNews.services', 'ui.router'])
.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'partials/home.html',
					controller: 'MainCtrl',
					controllerAs: 'vm'
				});
			$urlRouterProvider.otherwise('home');
		}
	]);
	