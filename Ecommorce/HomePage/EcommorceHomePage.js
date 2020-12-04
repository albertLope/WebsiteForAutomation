$(function(){
  $("#header").load("http://localhost:63342/website1/Ecommorce/utilities/header.html");
  $("#footer").load("http://localhost:63342/website1/Ecommorce/utilities/footer.html");
});

let btn = document.querySelector("#submitButton");

btn.addEventListener("click", active);

async function active() {

  console.log("Hello");
 await sleep(2000);
	console.log("Goodbye!");

  btn.classList.toggle("is_active");
   
}