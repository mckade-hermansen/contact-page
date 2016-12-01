$(document).ready(function () {

function validateEmail(email) {
    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailTest.test(email);
}

function validateFields(){
  var empty = false;
  // $('#contactMeForm').each(function() {
  //   if ( $(this).val() === '' ){
  //       empty = true;
  //   }
  //   console.log($(this).val());
  // });

  // var children = $('#contactMeForm').children('input');
  // console.log(children.length);

  // for (var i = 0; i < children.length; i++){
  //   if (children[i].value == ""){
  //     empty = true;
  //   }
  // }

  if ($('#firstName').val() === ''){
    empty = true;
  }
  if ($('#lastName').val() === ''){
    empty = true;
  }
  if ($('#email').val() === ''){
    empty = true;
  }
  if ($('#confirmEmail').val() === ''){
    empty = true;
  }
  if ($('#message').val() === ''){
    empty = true;
  }

  if (empty){
    return false;
  }
  else {
    return true;
  }
}

document.getElementById("submitButton").onclick = checkContactForm;

function checkContactForm() {

  if (!validateFields()){
    alert("Please fill out all fields");
  }
  else if (!validateEmail($('#email').val()) || !validateEmail($('#email').val())){
    alert("Not a valid Email!");
  }
  else if ($('#email').val() != $('#confirmEmail').val()){
    alert("Emails are not the same!");
  }
  else{
    alert("Thanks for Contacting Me :)");
  }
}


});
