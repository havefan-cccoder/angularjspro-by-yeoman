(function(){
    'use strict';

    angular
    .module('angularjsPro')
    .controller('SelectDemoController',[SelectDemoController]);

    function SelectDemoController(){
        var vm = this;
  vm.resultData = "hi!~";
  vm.groupList = [
    {
      "col":"",
      "con":""
    },{
      "col":"",
      "con":""
    },{
      "col":"",
      "con":""
    }
  ]
  vm.resultColumns_group = [
    {
      resultColCn:1,
      pkId:111,
      ischecked:false
    },{
      resultColCn:2,
      pkId:222,
      ischecked:false
    },{
      resultColCn:3,
      pkId:333,
      ischecked:false
    },{
      resultColCn:4,
      pkId:444,
      ischecked:false
    }
  ]
  // vm.filterGroupcols = function(_col){
  //   //这里会被调用两次，第一次有哦数据，第
  //   //二次没有，因为第一次ng-change触发是因为选择了选项，但是那个
  //   //循环会设置该选项隐藏，从而更新候选项的值，这样会再一次触发ng-change，这一次，没有参数传入
  //   //所以，很坑。ng-change的触发机制不只是选择选项，而是候选项内容更改，也会触发


  //   if (_col) {
  //     vm.resultColumns_group.forEach(function(_g){
  //       if (_col.pkId == _g.pkId) {
  //         _g.ischecked = true;
  //         return;
  //       }
  //     })
  //   }
  // }

  
  // vm.filterGroupcols = function(_col,_index){
  //   vm.groupList.forEach(function(gl,index){//不行，只要涉及到修改选项的属性，哪怕之前选过的select也会被触发ng-change事件从而清空所选的值
  //     if (_index != index && gl.col && gl.col.pkId) {
  //       vm.resultColumns_group.forEach(function(_g){
  //         if (gl.col.pkId == _g.pkId) {
  //           _g.ischecked = true;
  //           return;
  //         }
  //       })
  //     }
  //   })
    
  // }

  vm.filterGroupcols = function(_col){
    vm.resultColumns_group.forEach(function(_g){
      if (_col == _g.pkId) {
        _g.ischecked = true;
      }
    })
    console.log(JSON.stringify(vm.groupList))

  }


  vm.aarr = [1,2,3,4,5,6,7,8,9];
  vm.aobj = [
    {
      id:1,
      name:"语文",
      ischecked:"false"
    },{
      id:2,
      name:"数学",
      ischecked:"false"
    },{
      id:3,
      name:"英语",
      ischecked:"false"
    }
  ]
  vm.aobjfun = function(){
    vm.aobj[0].ischecked = "true";
  }


  /**多选下拉框 */

  vm.resultColumns = 
  [
    {
      "pkId": "3040761",
      "resultColCn": "姓名",
    },
    {
      "pkId": "3040762",
      "resultColCn": "年龄",
    },
    {
      "pkId": "3040763",
      "resultColCn": "测试",
    },
    {
      "pkId": "3040764",
      "resultColCn": "身份证号",
    },
    {
      "pkId": "3040765",
      "resultColCn": "姓名",
    },
    {
      "pkId": "3040766",
      "resultColCn": "年龄",
    },
    {
      "pkId": "3040767",
      "resultColCn": "班级",
    },
    {
      "pkId": "3040768",
      "resultColCn": "成绩",
    },
    {
      "pkId": "3040769",
      "resultColCn": "测试",
    },
    {
      "pkId": "3040770",
      "resultColCn": "身份证号",
    }
  ]
  ;
  angular.forEach(vm.resultColumns,function(i){
    i.checked = false;
  })
  vm.groupshowcolsarr = [];
  vm.checkcol = function(_c){
    if (_c.checked) {
      _c.checked = false;
      vm.groupshowcolsarr = vm.groupshowcolsarr.filter(function(n){
        return n.pkId!=_c.pkId;
      })
    } else {
      _c.checked = true;
      vm.groupshowcolsarr.push(_c);
    }

    if (vm.groupshowcolsarr.length == 1) {
      vm.groupshowcols = vm.groupshowcolsarr[0].resultColCn;
    } else if(vm.groupshowcolsarr.length >1){
      vm.groupshowcols = "";
      vm.groupshowcols = vm.groupshowcolsarr[0].resultColCn;
      vm.groupshowcolsarr.forEach(function(ga,index){
        if (index!=0) {
          vm.groupshowcols = vm.groupshowcols + "," + ga.resultColCn;
        }
      })
    }else{
      vm.groupshowcols = "";
    }
  }



  //计算屏幕的大小，确定分页个数
 var quickmodel_contentWidth = window.innerWidth - 330 -150;
 // vm.pagesize = parseInt((quickmodel_contentWidth)/70) + 1;

 var amounts = Math.floor((quickmodel_contentWidth)/64);
 vm.arr = [];
 var ALLARRLENGTH;
 if(amounts % 2 ==0){
   vm.arr.length = amounts;
   vm.pagesize =  amounts;
   ALLARRLENGTH = amounts;
 }else if(quickmodel_contentWidth%64<64){
   vm.arr.length = amounts-1;
   vm.pagesize =  amounts-1;
   ALLARRLENGTH = amounts-1;
 }else if(quickmodel_contentWidth%64>64){
   vm.arr.length = amounts+1;
   vm.pagesize = amounts+1;
   ALLARRLENGTH = amounts+1;
 }
    }
})()