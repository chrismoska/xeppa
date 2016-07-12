angular.module("livro", []).controller('LivroController', LivroController);
/*ngInject*/
function LivroController($scope, $state, LivroService){
	$scope.livros = LivroService.query();

	$scope.delete = function(idLivro){
			LivroService.delete({id: idLivro}, function(){
				$scope.livros = LivroService.query();
			});
	};
}

angular.module("livro").controller('LivroNovoController', LivroNovoController);
/*ngInject*/
function LivroNovoController($scope, $state, LivroService, AutorService){
	$scope.livro = new LivroService();
	$scope.autores = AutorService.query();	

	$scope.salvar = function(){
		  	$scope.livro.$save(function(){
				$state.go('livros');
			});
	};
}

angular.module("livro").controller('LivroEditarController', LivroEditarController);
/*ngInject*/
function LivroEditarController($scope, $state, $stateParams, LivroService, AutorService){
	$scope.livro = LivroService.get({ id: $stateParams.id });
	$scope.autores = AutorService.query();	

	$scope.salvar = function(){
		  	$scope.livro.$update(function(){
				$state.go('livros');
			});
	};
}

angular.module("livro").controller('LivroViewController',LivroViewController );
/*ngInject*/
function LivroViewController($scope, $state, $stateParams, LivroService){
	$scope.livro = LivroService.get({ id: $stateParams.id });	
}
