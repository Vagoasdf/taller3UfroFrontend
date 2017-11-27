(function () {
  'use strict';

  angular
  .module('app')
  .component('vernoticia', {
    templateUrl: 'app/components/vernoticia/noticia.html',
    controller: vernoticiaCtrl,
    controllerAs: 'vm'
  });

  //vernoticiaCtrl.$inject = ['NoticiaService'];

  function vernoticiaCtrl() {
    var vm = this;

    vm.noticia="ejemplo";

    /*
    NoticiaService.query().$promise.then(function (data) {
    	console.log(data);
      vm.noticia = data;

    vm.volver=function(){
    
    	$state.go('noticias');
    }
    */

    

  }
})();
