angular
.module('app')
.config(routesConfig)
.run(middlewareConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    template: '<h1>Netflix AngularJS</h1>'
  })
  .state('login', {
    url: '/login',
    component: 'login',
    isPrivate: false
  })
  .state('noticias', {
    url: '/noticias',
    component: 'noticias',
    isPrivate: false
  })
  .state('editar', {
    url: '/editar',
    component: 'editar',
    isPrivate: true
  })
  .state('peliculas', {
    url: '/peliculas',
    component: 'peliculas',
    isPrivate: true
  });

  $httpProvider.interceptors.push('InterceptorApi');
}

function middlewareConfig($state, CredentialsService, $transitions) {
  // Funcion cada vez que se intenta acceder a una ruta
  $transitions.onStart({}, function (trans) {
    var isPrivate = trans.$to().isPrivate;
    var to = trans.$to().name;
    // Compruebo si esta logeado para acceder a rutas protegidas, si no esta logeado se va a la pestaña login
    if (isPrivate && !CredentialsService.isLogged()) {
      $state.go('login');
    }

    // Compruebo que quiera entrar a el login cuando ya esta logeado
    if (to === 'login' && CredentialsService.isLogged()) {
      $state.go('app');
    }
  });
}
