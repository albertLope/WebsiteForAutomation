// JavaScript source code
const mortgageFormElement = document.getElementById('mortgageForm');
 
console.log(mortgageFormElement);

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("LastNameInput");
const downPayment= document.getElementById("DownPaymentInput");
const InterestRate = document.getElementById("InterestRateInput");
const homePrice = document.getElementById("homePriceInput");
const stateDropdown = document.getElementById("stateDropdown");
const durationDropdown = document.getElementById("durationDropdown");
const submitButton = document.getElementById("sbmButton"); 



submitButton.addEventListener('click', (e) => {
    e.preventDefault();
     
    
    var check = checkInputs();

     var allvalues = document.getElementsByClassName("formInput");

     localStorage.setItem("firstName", allvalues[0].value);
     localStorage.setItem("lastName", allvalues[1].value);

     localStorage.setItem("mortgageAmount", calculateAmount(allvalues));
     console.log("here"+calculateAmount(allvalues));

    if(check===true){
        window.location.href = "MortgageFormThankYouPage.html";
    }else{
        console.log("there is an error");
    }

    

});




function calculateAmount(myValues){
    
    for(var i = 0 ; i < myValues.length ; i++){
     console.log(myValues[i].value);
    }

    let result = (myValues[4].value - myValues[2].value);

    result = result + (result * myValues[3].value / 100);
     
    result = result / (myValues[6].value*12) ;
    console.log(result);

    if(myValues[5].value.startsWith("A")||myValues[5].value.startsWith("B")||myValues[5].value.startsWith("C")||myValues[5].value.startsWith("D")||myValues[5].value.startsWith("E")||myValues[5].value.startsWith("F")||myValues[5].value.startsWith("G")||myValues[5].value.startsWith("H")){
        result = result * 1.1;
    }else if(myValues[5].value.startsWith("I") || myValues[5].value.startsWith("J")|| myValues[5].value.startsWith("K") || myValues[5].value.startsWith("L")|| myValues[5].value.startsWith("M")|| myValues[5].value.startsWith("N")|| myValues[5].value.startsWith("O")){
        result = result * 1.2;
    }else if(myValues[5].value.startsWith("P")||myValues[5].value.startsWith("Q")||myValues[5].value.startsWith("R")||myValues[5].value.startsWith("S")||myValues[5].value.startsWith("T")||myValues[5].value.startsWith("U")||myValues[5].value.startsWith("V")||myValues[5].value.startsWith("W")||myValues[5].value.startsWith("X")||myValues[5].value.startsWith("Y")||myValues[5].value.startsWith("Z")){
        result = result * 1.3;
    }

    return result;
}

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNamevalue = lastName.value.trim();
    const downPaymentvalue = downPayment.value.trim();
    const InterestRatevalue = InterestRate.value.trim();
    const homePricevalue = homePrice.value.trim();
    const stateDropdownvalue = stateDropdown.value.trim();
    const durationDropdownvalue = durationDropdown.value.trim();

    var fNameBool = false;
    var lNameBool = false;
    var PNumberBool = false;
    var SSNnumbBool = false;
    var addres1Bool = false;
    var addres2Bool = false;
    var zipCodeBool = false;

    if(firstNameValue ==='') {
        setErrorFor(firstName , 'Enter the first name');
        fNameBool =false;
    }else { 
        setSuccessFor(firstName);
        fNameBool =true;
    }

    if(lastNamevalue ==='') {
        setErrorFor(lastName , 'Enter the last name');
         lNameBool =false;
    }else { 
        setSuccessFor(lastName);
         lNameBool =true;
    }
   
    if(downPaymentvalue ==='') {
        setErrorFor(downPayment , 'Enter a down payment');
        PNumberBool =false;
    }else { 
        setSuccessFor(downPayment);
        PNumberBool =true;
    }

    if(InterestRatevalue ==='') {
        setErrorFor(InterestRate, 'Enter a interest rate');
        SSNnumbBool =false;
    }else { 
        setSuccessFor(InterestRate);
         SSNnumbBool =true;
    }

    if(homePricevalue ==='' ) {
        setErrorFor(homePrice , 'Enter the home price ');
        addres1Bool = false;
    }else if(homePricevalue< downPaymentvalue){
        setErrorFor(homePrice , 'Home price can not be less then down payment');
        addres1Bool = false;
    }else { 
        setSuccessFor(homePrice);
        addres1Bool = true;
    }

    if(stateDropdownvalue === 'Select' ) {
        setErrorFor(stateDropdown, 'Select the state');
        addres2Bool = false;
    }else { 
        setSuccessFor(stateDropdown);
        addres2Bool = true;
    }

    if(durationDropdownvalue === 'Select' ) {
        setErrorFor(durationDropdown, 'Choose the duration');
        zipCodeBool = false;
    }else { 
        setSuccessFor(durationDropdown);
        zipCodeBool = true;
    }
  
   

   
     

    if(fNameBool === false ||lNameBool === false ||PNumberBool === false ||SSNnumbBool === false ||addres1Bool === false ||addres2Bool === false ||zipCodeBool === false  ){

        return false;
    }else { 
        return true;
    }
     
}

function setErrorFor(input , message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'labelAndInput error';
 } 

 function setSuccessFor(input){
    const formControl = input.parentElement;
     
    formControl.className = 'labelAndInput success';
     
 }

 
 function lettersOnly() {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}
 
 function isInputNumber(evt){
	var charCode = String.fromCharCode(evt.which);

	if(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){

		evt.preventDefault();
	}

 }