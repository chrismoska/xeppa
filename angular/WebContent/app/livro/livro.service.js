angular.module("livro").factory("LivroService", LivroService);
/*ngInject*/
function LivroService($resource){
	return $resource('http://localhost:8080/livros/api/livros/:id', {id: '@_id'}, {
		update: {
			method: 'PUT',
			url   : 'http://localhost:8080/livros/api/livros/:id',
			params: {id: '@id'},
			isArray: false
		},
		getByAutor:{
			method: 'GET',
			url   : 'http://localhost:8080/livros/api/livros/autor/:id',
			params: {id: '@id'},
			isArray: true
		}
	});	
}