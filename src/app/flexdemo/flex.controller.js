(function(){
    'use strict';

    angular
        .module("angularjsPro")
        .controller("FlexDemoController",[FlexDemoController]);

    function FlexDemoController() {
        var vm = this;
        vm.block_item_list1 = [];
        vm.block_item_list1.length = 10;
        vm.block_item_list2 = [];
        vm.block_item_list2.length = 3;
        vm.block_item_list = [];
        vm.block_item_list.length = 15;
    }
})();