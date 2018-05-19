//이 파일이 DOM.js가 되야한다.

//import {delFunc} from 'DOM.js';

$(document).ready(function() {
  var value = '';

  $('.numButton').on('click', function(){
    value += $(this).html();
    $('#input').html(value);
    console.log(value);
  }); // 숫자 버튼을 클릭할시 value값의 변화 + input 박스에 출력되는 값 변화.

  $('.calculate').on('click', function(){
    if(value[value.length-1] === '+' || value[value.length-1] === '-'
      || value[value.length-1] === '*' || value[value.length-1] === '/')
      return alert('사칙연산이 중복됩니다!!');
    else {
      value += $(this).html();
      $('#input').html(value);
      console.log(value);
      }
    });

    $('#clear').on('click', function(){
      $('#input').html('input');
      value = '';
      console.log(value);
    }); // clear버튼을 누르면 value를 초기화한다.

    $('#result').on('click', function(){
      $('#input').html(eval(value));//eval없이 할 수 있다. 바꿔보기
      value = eval(value);
      console.log(value);
    }); // =버튼을 실행할때 eval로 string을 풀어서 연산자가 작동하게 하여 출력시켜준다.

    $('#delete').on("click", delFunc);//value 변수가 DOM.js에서 공유되지 않는 문제가 있다!!!
});
