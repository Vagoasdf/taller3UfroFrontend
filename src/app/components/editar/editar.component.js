(function () {
  'use strict';

  angular
  .module('app')
  .component('editar', {
    templateUrl: 'app/components/editar/editar.html',
    controller: editarCtrl,
    controllerAs: 'vm'
  });

  editarCtrl.$inject = ['NoticiasService','EditarService','CategoriasService'];

  function editarCtrl(NoticiasService,EditarService,CategoriasService) {
    var vm = this;

    vm.editar=EditarService;

    vm.serviceNoticias=NoticiasService;


    vm.noticias = [];
    vm.inicio=true;
    vm.nuevaNoticia=false;
    vm.editar=false;
    vm.categorias=[];

    NoticiasService.query().$promise.then(function (data) {
    	console.log(data);
      vm.noticias = data;
      });

    CategoriasService.query().$promise.then(function (data) {
      console.log(data);
      vm.categorias = data;
      });

    function remove(array, element) {
      const index = array.indexOf(element);
    
      if (index !== -1) {
        array.splice(index, 1);
      }
    }

    vm.editarNoticia=function(idBusqueda){
    	console.log(idBusqueda);
      vm.inicio=false;
      vm.editar=true;
      vm.noticias.forEach( function (noticia)
        {
          console.log(noticia.id+"=="+idBusqueda);
            if(noticia.id==idBusqueda){
               vm.noticiaActual=noticia;
               console.log("foundit");
               
            }
        });
     
      console.log(vm.noticiaActual);
    	
    }

    

    vm.volver=function(){
      vm.inicio=true;
      vm.nuevaNoticia=false;
      vm.editar=false;

      vm.serviceNoticias.query().$promise.then(function (data) {
        console.log(data);
        vm.noticias = data;
      });
    }

    vm.borrarNoticia=function(idDelete){
    	console.log(idDelete);
    	console.log(EditarService.delete({id:idDelete}));
        vm.noticias.forEach( function (noticia)
        {
          console.log(noticia.id+"=="+idDelete);
            if(noticia.id==idDelete){
               remove(vm.noticias,noticia);
               console.log("foundit");
               
            }
        });
      
    

    }

    vm.crearNoticia=function(){
      vm.nuevaNoticia=true;
      vm.inicio=false;

    }
    vm.subirNoticia=function(noticiaNueva){
      console.log(noticiaNueva);
      var noticiaLista= EditarService.create(noticiaNueva);
      console.log("Created. Noticia: " + noticiaLista);
      console.log(noticiaLista);
      console.log(noticiaLista.id);

      if(noticiaLista.id != null){
        console.log("pa adentro!");
        vm.noticias.push(noticiaLista);

      }
      
     
    }

    vm.guardar=function(noticia){
      var idEdit=noticia.id;
      console.log(noticia);
      console.log(idEdit);
      console.log(EditarService.update({id:idEdit},noticia));
      
     
      vm.inicio=true;
      vm.nuevaNoticia=false;
      vm.editar=false;


    }

    vm.crear=function(){

    }
    

  }
})();
