autosardar.controller('splashCtrl', function($scope, $stateParams,$timeout,$state) {
$timeout(function () {
		$state.go('login');
	},3000);
});