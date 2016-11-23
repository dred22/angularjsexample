app.component('serieComponent', myFunc());


  function myFunc(){
    return {
      templateUrl: './component/serie/serieComponent.html',
      bindings: {
        serie: '=' // <
      },
      controller: ['$scope', serieComponentController],
      controllerAs: 'serieComponent',
    }
  };

  function serieComponentController(){
    var vm = this;
    //console.log(vm.serie)
    vm.add = function(serie){
      console.log(serie);
    }

  }