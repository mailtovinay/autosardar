autosardar.controller('loginCtrl', function($scope, $stateParams,$state) {
$scope.login = function(){
    $state.go('app.playlists');
}
$scope.register = function(){
    $state.go('register');
}
});