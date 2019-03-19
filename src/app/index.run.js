(function() {
  'use strict';

  angular
    .module('angularjsPro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
