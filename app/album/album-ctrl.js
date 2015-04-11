angular.module('materialApp.controllers')
  .controller('AlbumCtrl', [
    'albums',
    '$routeParams',
    '$timeout',
    '$rootScope',
  function(albums, $routeParams, $timeout, $rootScope) {

    var vm = this;

    vm.album = R.find(R.propEq('id', $routeParams.name))(albums);

     vm.artist = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + vm.album.artistImg + ')',
      backgroundSize: 'cover'
    };

    vm.uiState = 'album-card--expand';
    vm.uiStyle = {
      backgroundColor: vm.album.color,
      color: vm.album.textColor
    };

    $timeout(function() {
      $rootScope.transition = 'reverse';
    }, 300);

  }]);
