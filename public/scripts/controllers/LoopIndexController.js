angular
  .module('looply')
  .controller('LoopIndexController', LoopIndexController);

LoopIndexController.$inject = ['$http'];

function LoopIndexController(  $http  ){
  var vm = this;
  var dbUrl = "/api/loops";
  vm.loops = [];
  vm.sanity = "Connected!";


  $http.get(dbUrl).then(loadLoops, logError);

  function loadLoops(response){
    vm.loops = response.data
  }

  function logError(response){
    console.log("There's an error", response)
  }

}
