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
      $('#input').html(' ');
      value = '';
      console.log(value);
    }); // clear버튼을 누르면 div의 html값을 제거한다.

    $('#result').on('click', function(){
      $('#input').html(eval(value));
      value = eval(value);
      console.log(value);
    }); // =버튼을 실행할때 연산자를 풀어서 출력시켜준다.

    $('#delete').on("click", function(){
      var num = $('#input').html();
      $('#input').html(num.slice(0,-1));
      if(!($('#input').html().length)) return value = '';
      console.log(value);
    });

});
