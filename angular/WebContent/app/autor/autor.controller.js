angular.module("autor",[]).controller('AutorController', AutorController);


/*@ngInject*/
function AutorController($scope, $state, AutorService){
	$scope.autores = AutorService.query();
	$scope.delete = function(idAutor){
			AutorService.remove({id: idAutor}, function(){
				$scope.autores = AutorService.query();
			});
	};
}


angular.module("autor").controller('AutorNovoController', AutorNovoController);

/*@ngInject*/
function AutorNovoController($scope, $state, AutorService){
	$scope.autor = new AutorService();
	
	$scope.salvar = function(){
		  	$scope.autor.$save(function(){
				$state.go('autores');
			});
	};
}

angular.module("autor").controller('AutorEditarController', AutorEditarController);

/*@ngInject*/
function AutorEditarController($scope, $state, $stateParams, AutorService){
	$scope.autor = AutorService.get({ id: $stateParams.id });
	
	$scope.salvar = function(){
		  	$scope.autor.$update(function(){
				$state.go('autores');
			});
	};
}

angular.module("autor").controller('AutorViewController', AutorViewController);

/*@ngInject*/
function AutorViewController($scope, $state, $stateParams, AutorService, LivroService){
	$scope.autor = AutorService.get({ id: $stateParams.id });	
	$scope.livros = LivroService.getByAutor({ id: $stateParams.id });
}

