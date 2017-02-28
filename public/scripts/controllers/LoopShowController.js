angular
  .module('looply')
  .controller('LoopShowController', LoopShowController);

LoopShowController.$inject = ['$http', '$routeParams'];

function LoopShowController(  $http  ,  $routeParams){
  var vm = this;
  var dbUrl = "/api/loops/";
  vm.loops = [];
  vm.sanity = "Connected!";

  $http.get(dbUrl + $routeParams.id ).then(loadLoops, logError);

  function loadLoops(response){
    console.log(response.data);
    vm.loops = response.data;
  }

  function logError(response){
    console.log("There's an error", response)
  }

}
