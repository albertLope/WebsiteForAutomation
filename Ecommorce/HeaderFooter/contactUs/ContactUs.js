$(function(){
  $("#header").load("http://localhost:63342/website1/Ecommorce/utilities/header.html");
  $("#footer").load("http://localhost:63342/website1/Ecommorce/utilities/footer.html");
 
});


var sbmButton = document.getElementById("submitButton");
var input = document.getElementById("textArea");
var errorIcon =  document.getElementById("errorIcon");
var errorText =  document.getElementById("errorText");


sbmButton.addEventListener('click', (e) => {
    
    if(input.value===''){
        errorIcon.classList.add("err");
        errorText.classList.add("err");
         
    }else{
    
        console.log("asdasd2222222222");
      window.location.href = "ContactUsThankYouHTML.html";
    }
  
});
 


