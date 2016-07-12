var APP = angular.module("livroApp", ['ui.router', 'ngResource'])
                .config(
                        function($stateProvider) {
                                $stateProvider.state('home', {
                                        url: '/principal',
                                        templateUrl: 'app/home/view/home.html',
                                        controller: 'PrincipalController'
                                })
                                .state('livros', {
                                        url: '/livros',
                                        templateUrl: 'app/livro/view/index.html',
                                        controller: 'LivroController'
                                })
                                 .state('novoLivro', {
                                        url: '/livros/novo',
                                        templateUrl: 'app/livro/view/novo.html',
                                        controller: 'LivroNovoController'
                                })
                                .state('editarLivro', {
                                        url: '/livros/:id/editar',
                                        templateUrl: 'app/livro/view/editar.html',
                                        controller: 'LivroEditarController'
                                })
                                .state('viewLivro', {
                                        url: '/livros/:id',
                                        templateUrl: 'app/livro/view/view.html',
                                        controller: 'LivroViewController'
                                })
                                .state('autores', {
                                        url: '/autores',
                                        templateUrl: 'app/autor/view/index.html',
                                        controller: 'AutorController'
                                })
                                .state('novoAutor', {
                                        url: '/autores/novo',
                                        templateUrl: 'app/autor/view/novo.html',
                                        controller: 'AutorNovoController'
                                })
                                .state('editarAutor', {
                                        url: '/autores/:id/editar',
                                        templateUrl: 'app/autor/view/editar.html',
                                        controller: 'AutorEditarController'
                                })
                                .state('viewAutor', {
                                        url: '/autores/:id',
                                        templateUrl: 'app/autor/view/view.html',
                                        controller: 'AutorViewController'
                                })
                        }
                )

