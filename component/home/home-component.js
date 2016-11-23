app.component('homeComponent', myFunc());


  function myFunc(){
    return {
      templateUrl: './component/home/home-component.html',
      bindings: {
        
      },
      controller: [ '$scope', homeComponentController],
      controllerAs: 'homeComponent',
    }
  };

  function homeComponentController(){
    var vm = this;
    // console.log('ffffffffffffffffff')
    // SerieService.seekMySerie();
  }