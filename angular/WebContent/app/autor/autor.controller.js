APP.controller('AutorController', function($scope, $state, AutorService){
	$scope.autores = AutorService.query();

	$scope.delete = function(idAutor){
			AutorService.remove({id: idAutor}, function(){
				$scope.autores = AutorService.query();
			});
	};

});


APP.controller('AutorNovoController', function($scope, $state, AutorService){
	$scope.autor = new AutorService();
	
	$scope.salvar = function(){
		  	$scope.autor.$save(function(){
				$state.go('autores');
			});
	};
});

APP.controller('AutorEditarController', function($scope, $state, $stateParams, AutorService){
	$scope.autor = AutorService.get({ id: $stateParams.id });
	
	$scope.salvar = function(){
		  	$scope.autor.$update(function(){
				$state.go('autores');
			});
	};
});

APP.controller('AutorViewController', function($scope, $state, $stateParams, AutorService, LivroService){
	$scope.autor = AutorService.get({ id: $stateParams.id });	
	$scope.livros = LivroService.getByAutor({ id: $stateParams.id });
});

