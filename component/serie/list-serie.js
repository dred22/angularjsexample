app.component('listSerieComponent', myFunc());


  function myFunc(){
    return {
      templateUrl: './component/serie/list-serie.html',
      bindings: {
        series: '=' // <
      },
      controller: ['$scope', listSerieComponentController],
      controllerAs: 'listSerieComponent',
    }
  };

  function listSerieComponentController(){
    var vm = this;
    

  }