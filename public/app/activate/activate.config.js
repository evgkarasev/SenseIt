(function(){

'use strict';

//ACTIVATE sub module routing
angular
  .module('SenseIt.activate')
   .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider){

    $stateProvider.state('app.activate', {
          url: 'activate',
          views: {
            'header': {
                templateUrl: 'app/common/header.html'
            },
            'content@': {
               templateUrl: 'app/dashboard/dashboard.html',
               controller:  'ActivateController',
               controllerAs: 'vm'
            },
            'footer' : {
              templateUrl: 'app/common/footer.html'
            }
          },
          data : {
            authenticate: true  //TRUE in non testing mode
          }

        });



      }




})();
