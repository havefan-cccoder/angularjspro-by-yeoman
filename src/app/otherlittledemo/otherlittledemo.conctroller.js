(function() {
  'use strict';

  angular
    .module('angularjsPro')
    .controller('OtherLittleDemoController', OtherLittleDemoController);

  /** @ngInject */
  function OtherLittleDemoController() {
    var vm = this;

    /**
     * 个人总结产生闭包的三个条件是：
        1.调用的函数是父级作用域内部声明的
        2.调用的函数是在父级作用域之外进行调用
        3.调用的函数内部使用了父级作用域的内部变量
     */

    //闭包#1:   通过return方式，把内部私有空间暴露给外部

    function f(){
      var b = "b";

      return function (){
        return b;
      }
    }

    //测试，与闭包#3的区别
    function fcom(){
      var b = "b";
      var fc = function (){
        return b;
      }

      return fc;
    }
    var com = fcom();
    console.log("对比#1与#3：" + com());
    //测试结束——一样的

    // console.log(b); //——>error:b is not defiened，b是f()的私有空间里的变量，全局里访问不到

    var n = f();//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~f()是一个全局函数，将它赋给一个全局变量，从而生成一个可以访问f()私有空间的新全局函数
    console.log("#1 " + n());//——>b

    //闭包#2   通过定义全局变量，在私有空间内，拿到私有变量，暴露给外部
    var a;

    function a2(){
      var b2 = "b2";

      a = function(){
        return b2;
      }
    }

    a2();
    console.log("#2 " + a());//——>"b2"
    /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~如果一个函数需要在其父级函数返回之后，留住对父级作用域的链接，就必须为此建立一个闭包。
     * a2是a的父级函数，在a2返回之后，a依然可以访问a2中的局部变量。
     */

     //闭包#3   通过return方式，把内部私有空间暴露给外部

          /**
           *
           * 可借鉴
           */
          function a3(_val){
            var c3 = function() {
              return _val;
            };

          //  c3();//console.log("#3" + d);这会报d is undefiend,因为c3定义时，_val还没有值

            _val++;
            return c3;
          }
          var d = a3(3);
     console.log("#3 " + d());//这里返回的是4不是3，说明函数所绑定的是作用域本身，而不是该作用域中的变量或变量当前所返回的值

     //闭包#4：！！！！！循环中的闭包:一个三次性的循环操作，它在每次迭代中都会创建一个返回当前循环序号的新函数。该新函数会被添加到一个数组中，并最终返回。

     //自己写的……
    //  function a4(){
    //    var arr = [];
    //     for (var i = 0; i < 3; i++) {
    //       var fn = function(){
    //         return i
    //       }

    //       arr.push(fn());//这里是放的i，不是函数
    //     }
    //    return arr;
    //  }

    //  var arr1 = a4();
    //  console.log("#4 " + arr1[0]());

    //demo1
    function a42(){
      var arr2 = [];
       for (var i = 0; i < 3; i++) {
        arr2[i] = function(){
           return i
         }
       }
      return arr2;
    }

    var arr12 = a42();
    console.log("#42 " + arr12[0]());
    console.log("#42 " + arr12[1]());
    console.log("#42 " + arr12[2]());//创建的这仨闭包，指向了共同的局部变量i，它们都只是”引用“，因此只能返回i的当前的值。所以需要三个不同的变量。



    //demo2
    function a43(){
      var arr3 = [];
       for (var i = 0; i < 3; i++) {
        arr3[i] = (function(x){//为了传参进去
          return function(){ //为了返回函数，放进数组
            return x //每循环到此一次，就创建了一个局部变量
          }
         })(i)//而且还自执行了
       }
      return arr3;
    }

    var arr13 = a43();
    console.log("#43 " + arr13[0]());
    console.log("#43 " + arr13[1]());
    console.log("#43 " + arr13[2]());

    //也可以定义一个不用自调的内部函数，是在每次迭代中，在中间函数内将i的值”本地化“。——即把自调函数拎出来

            /**
             *
             * 可借鉴
             */
            //demo3
            function makeClosure(_i){
              return function(){
                return _i;
              }
            }
            function ff(){
              var arr4 = [];
              var i;
              for (i = 0; i < 3; i++) {
                arr4[i] = makeClosure(i);
              }

              return arr4;
            }


            var arr14 = ff();
    console.log("#44 " + arr14[0]());
    console.log("#44 " + arr14[1]());
    console.log("#44 " + arr14[2]());

  }
})();
