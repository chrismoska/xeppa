angular.module("livroApp").controller('PrincipalController',PrincipalController);
/*ngInject*/
function PrincipalController($scope, LivroService){
	$scope.livros = LivroService.query();
}