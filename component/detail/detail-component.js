app.component('detailComponent', myFunc());


  function myFunc(){
    return {
      templateUrl: './component/detail/detail-component.html',
      bindings: {
        
      },
      controller: [ 'SerieService','$stateParams', detailComponentController],
      controllerAs: 'detailComponent',
    }
  };

  function detailComponentController(SerieService, $stateParams){
    var vm = this;
    
      SerieService.getMySerie($stateParams.movieId)
      .then(function onSuccess ( response ){
        vm.serie = response;
        //console.log(vm.serie);
      })
    vm.add = function(serie){
      
      SerieService.addMySerie(serie);
    }
    vm.isStored = function  (query) {

      SerieService.isStored();

    }
  }