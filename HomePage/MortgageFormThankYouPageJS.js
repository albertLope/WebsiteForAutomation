
 
document.getElementById("text").innerText = "Thank you , "+ localStorage.getItem('firstName')
+" "+localStorage.getItem('lastName');

document.getElementById("montlyPayment").innerText = "Your montly payment is " 
+ localStorage.getItem('mortgageAmount');


if( localStorage.getItem('mortgageAmount')<2000 ){
	document.getElementById("weirdMessage").innerText = "You need to look for better apartment do you really want to stay here";
}else if(localStorage.getItem('mortgageAmount')>2000 && localStorage.getItem('mortgageAmount')<4000){
	document.getElementById("weirdMessage").innerText = "Dude this apartment is cool and you should take it there is 3 bed room I dont know what you gona do with that room but it is fine I think you will like it.";
}else if(localStorage.getItem('mortgageAmount')>5000){
	document.getElementById("weirdMessage").innerText = "You are a rich guy I guess. You are looking for expensive apartment I think we should be a friend.";
}
