// JavaScript source code


document.getElementById("ThankYouText").innerText = "Thank you , "+ localStorage.getItem('firstName')
+" "+localStorage.getItem('lastName');

document.getElementById("PaidCard").innerText = "Your paid with " 
+ localStorage.getItem('cardName') + " card" ;

document.getElementById("yourDepartment").innerText = "Your department will be " 
+ localStorage.getItem('Department')+ " good luck with it :D ";