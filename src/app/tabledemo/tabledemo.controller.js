(function () {
    'use strict';

    angular
      .module('angularjsPro')
      .controller('TableDemoController',[TableDemoController]);

    function TableDemoController() {
        var vm = this;
  vm.aa = [1,2,3];
  vm.b="aaa";
  vm.abc="acb";

  vm.sceneCol = [1,2,3,4,5,6,7]
  /**上移下移数组里的元素 */
  function moveItem (arr,index1,index2){
      arr[index1] = arr.splice(index2,1,arr[index1])[0];
  }

  /**把数组里的元素移到顶部或底部 */
  function moveItemTopOrBottom(arr,index,topOrBottom){
      var item = null;
      if(topOrBottom == 'top'){
          item = arr.splice(index,1);
          arr.unshift(item[0]);
      }else if(topOrBottom == 'bottom'){
          item = arr.splice(index,1);
          arr.push(item[0]);
      }
  }
  vm.direction = [""];//用来存放当前列的列表元素的列排序
  vm.moveColumn = function (index,moveDirect){
      if(moveDirect == 'up'){
          if(index == 0){return;}
          moveItem(vm.sceneCol,index,index-1);//移动列表元素
          moveItem(vm.direction,index,index-1);//移动列表元素的列排序元素
      }
      if(moveDirect == 'down'){
          if(index == vm.sceneCol.length-1){return;}
          moveItem(vm.sceneCol,index,index+1);
          moveItem(vm.direction,index,index+1);
      }
      if(moveDirect == 'top'){
          if(index == 0){return;}
          moveItemTopOrBottom(vm.sceneCol,index,'top');
          moveItemTopOrBottom(vm.direction,index,'top');
      }
      if(moveDirect == 'bottom'){
          if(index == vm.sceneCol.length-1){return;}
          moveItemTopOrBottom(vm.sceneCol,index,'bottom');
          moveItemTopOrBottom(vm.direction,index,'bottom');
      }

      vm.direction = [""];//保证每次选择完后清空数据，这样就能对同一列数据进行每次都相同的位置操作了
      console.log(vm.direction);

  };
    }
})();