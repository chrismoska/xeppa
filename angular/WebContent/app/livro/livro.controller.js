APP.controller('LivroController', function($scope, $state, LivroService){
	$scope.livros = LivroService.query();

	$scope.delete = function(idLivro){
			LivroService.delete({id: idLivro}, function(){
				$scope.livros = LivroService.query();
			});
	};

});

APP.controller('LivroNovoController', function($scope, $state, LivroService, AutorService){
	$scope.livro = new LivroService();
	$scope.autores = AutorService.query();	

	$scope.salvar = function(){
		  	$scope.livro.$save(function(){
				$state.go('livros');
			});
	};
});

APP.controller('LivroEditarController', function($scope, $state, $stateParams, LivroService, AutorService){
	$scope.livro = LivroService.get({ id: $stateParams.id });
	$scope.autores = AutorService.query();	

	$scope.salvar = function(){
		  	$scope.livro.$update(function(){
				$state.go('livros');
			});
	};
});

APP.controller('LivroViewController', function($scope, $state, $stateParams, LivroService){
	$scope.livro = LivroService.get({ id: $stateParams.id });	
});