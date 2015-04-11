angular.module('materialApp.controllers')
  .controller('HomeCtrl', [
    'albums',
  function(albums) {

    var vm = this;

    vm.albums = albums;

    vm.getDestination = function(id) {
      return '#/albums/' + id;
    };

  }]);
