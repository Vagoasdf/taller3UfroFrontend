(function () {
  'use strict';

  angular
  .module('app')
  .service('CategoriasService', categoriasService);

  categoriasService.$inject = ['$resource', 'API'];

  function categoriasService($resource, API) {
    return $resource(API + 'categorias');
  }
})();