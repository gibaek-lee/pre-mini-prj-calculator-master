//이 파일이 API.js가 되야한다.

//export {delFunc};

//module화 방법1
(function(global) {
  function delFunc(){
    if($('#input').html()!=='input'){
      $('#input').html($('#input').html().slice(0,-1));
    }
    if(!($('#input').html().length)) {
      $('#input').html('input');
      global.value = ''; //Module로 구현해서 함수 넘길 시 API.js의 value가 window로 전달되지 않아 value값이 초기화 되지 않고 있다!!!!
    }
    console.log(global.value);
  };
  global.delFunc = delFunc;
})(window);//nodejs 에서는 window가 아니라 global이 사용된다. 서버사이드 구현할 때 조심해야 한다. atom local debugging package에서는 nodejs를 기본으로 사용하므로 atom 자체 콘솔에서 테스트에서 window를 인식하지 못해 console.log(window)하면 에러라고 나온다. console.log(global) 하면 값이 나온다.

/*
//모듈화 방법2
var delFunc = (function() {
  var global = 'ww'
  function delFunc(){
    if($('#input').html()!=='input'){
      $('#input').html($('#input').html().slice(0,-1));
    }
    if(!($('#input').html().length)) {
      $('#input').html('input');
      value = '';
    }
    console.log(value);
  };
  return delFunc
})();

//모듈화 방법3 : underscore 과제 참조
(function() {
  window._ = {};


})();
*/
