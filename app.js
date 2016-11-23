var app = angular.module("moveApp", ['ui.router']);

app.config([
    '$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('home',
          {
            url: '/',
            template: '<home-component></home-component>',
            
            
          })
           .state('searche',
           {
            url: '/searche',
            template: '<search-component></search-component>',

          })
          .state('detail',
           {
            url: '/detail/:movieId',
            template: '<detail-component></detail-component>',
          });
  },]);
app.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
})