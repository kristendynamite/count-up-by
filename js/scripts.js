$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
//naming variables to gather input from form
    var number1 = parseInt($("input#n1").val());
    var number2 = parseInt($("input#n2").val());
//take number to count to
for (var multiple = number1; multiple <= number2; multiple += number1) {
  alert(multiple);
}

  });
});
