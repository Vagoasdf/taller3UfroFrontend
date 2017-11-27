(function () {
  'use strict';

  angular
  .module('app')
  .component('noticias', {
    templateUrl: 'app/components/noticias/noticias.html',
    controller: noticiasCtrl,
    controllerAs: 'vm'
  });

  noticiasCtrl.$inject = ['NoticiasService','$state'];

  function noticiasCtrl(NoticiasService, $state) {
    var vm = this;

    vm.noticias = [];

    vm.inicio=true;

    vm.focusNoticia=false;
    vm.noticiaActual=[];
    
    NoticiasService.query().$promise.then(function (data) {
    	console.log(data);
      vm.noticias = data;
    });

    vm.mostrarNoticia=function(idBusqueda){
    	    	
    	vm.focusNoticia=true;
    	vm.inicio=false;
    	  vm.noticias.forEach( function (noticia)
        {
          console.log(noticia.id+"=="+idBusqueda);
            if(noticia.id==idBusqueda){
               vm.noticiaActual=noticia;
               console.log("foundit");
               
            }
        });

    }

    vm.volver=function(){
    	vm.focusNoticia=false;
    	vm.inicio=true;
    }

  }
})();
