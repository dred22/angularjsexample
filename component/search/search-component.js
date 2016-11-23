app.component('searchComponent', myFunc());


  function myFunc(){
    return {
      templateUrl: './component/search/search-component.html',
      bindings: {

      },
      controller: [ 'SerieService', searchComponentController],
      controllerAs: 'searchComponent',
    }
  };

  function searchComponentController(SerieService){
    var vm = this;
    vm.gg = [];
    vm.search = function  (query) {

      SerieService.seekMySerie(query)
      .then(function onSuccess ( response ){
        vm.gg = response;
        //console.log(response);
      })

    }


    //console.log('ffffffffffffffffff')

    
  }