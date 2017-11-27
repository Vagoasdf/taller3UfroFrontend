(function () {
  'use strict';

  angular
  .module('app')
  .service('EditarService', editarService);

  editarService.$inject = ['$resource', 'API'];

  function editarService($resource, API) {
    return $resource(API + 'noticia/:id',
    	{id:'@id'},
    	{ 
    		'update':{method:'PUT'},
    		'delete':{method:'DELETE'},
    		'create':{method:'POST'}
    	 }
    	);
  }
})();