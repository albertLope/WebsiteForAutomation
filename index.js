console.log("hello world");
 
var sbmButton = document.getElementById("submitBTN");
var registerForm = document.getElementsByClassName("container");
const myForm = document.getElementById('formID');
var allInputs = document.getElementsByClassName("formInput");
var clearButton =   document.getElementById("clearBTN");

    console.log(sbmButton);
    console.log("class name is here -->> "+registerForm);
   
    
  sbmButton.addEventListener("mouseenter" , mouseEnterContainer);
  sbmButton.addEventListener("mouseleave" , mouseLeaveContainer);
   
 function clearAllInputs(){

     for(var i = 0 ; i< allInputs.length ; i++){

        allInputs[i].value='';
     
      }
 }
   
 

 function mouseEnterContainer(){
    sbmButton.style.color = "green";
 }

 function mouseLeaveContainer(){
    sbmButton.style.color = "black";
 }
  
 function isInputNumber(evt){
	var char = String.fromCharCode(evt.which);

	if(!(/[0-9]/.test(char))){

		evt.preventDefault();
	}

 }

 function lettersOnly() {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}

clearButton.addEventListener("click" , makeAllIconsHidden);

function makeAllIconsHidden(){

        var allIcons = document.getElementsByTagName("i");
        var allSmall = document.getElementsByTagName("small");

        for(var i = 0 ; i < allIcons.length ; i++){
              const formControl =  allIcons[i].parentElement;
     
            formControl.className = 'labelOfTheInput'; 
        }

         for(var i = 0 ; i < allSmall.length ; i++){
            
           const formControl =  allSmall[i].parentElement;
     
            formControl.className = 'labelOfTheInput';
        }

}
 

/* function checkForm(){
 
    for(var i =0 ; i< allInputs.length ; i++){

        var x = allInputs[i].value;

        if(x == "" ){
             alert("fill the form bro");  
            return false;
        }

    }

}
*/

/*function getTheNumberLength(){
       
       var ssninput = document.getElementById("SSNInput").value;

        console.log("getTheNumberLength element is here -->> " + ssninput );

        console.log(ssninput.length + "ssn input length");
        
        var resultSSN = false 
        if(!(ssninput.length==9)){

           alert("SSN input 9 digit of number is required");  
           resultSSN = false;  
        }else {
          resultSSN = true;
        }
          
        var phoneNumber= document.getElementById("PhoneNumberInput").value;

        var resultPhoneNumber = false 
        if(!(phoneNumber.length==10)){

           alert("Phone number input 10 digit of number is required");  
           resultPhoneNumber= false;  
        }else {
            console.log("else statment");
            resultPhoneNumber= true;
        }

        if(resultSSN ==false || resultPhoneNumber==false){
            
            return false;

        }else {
            return true;
        }
          
}
*/

 

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("LastNameInput");
const phoneNumber= document.getElementById("PhoneNumberInput");
const SSNNumber = document.getElementById("SSNInput");
const address1 = document.getElementById("Address1Input");
const address2 = document.getElementById("Address2Input");
const zipcode = document.getElementById("ZipCodeInput");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var check = checkInputs();

    if(check===true){
        window.location.href = "ThankyouPage.html";
    }else{
        console.log("there is an error");
    }
});

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNamevalue = lastName.value.trim();
    const phoneNumbervalue = phoneNumber.value.trim();
    const SSNNumbervalue = SSNNumber.value.trim();
    const address1value = address1.value.trim();
    const address2value = address2.value.trim();
    const zipcodevalue = zipcode.value.trim();

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
   
    if(phoneNumbervalue ==='' || phoneNumbervalue.length!==10) {
        setErrorFor(phoneNumber , 'Enter a valid phone number');
        PNumberBool =false;
    }else { 
        setSuccessFor(phoneNumber);
        PNumberBool =true;
    }

    if(SSNNumbervalue ==='' || SSNNumbervalue.length!==9) {
        setErrorFor(SSNNumber , 'Enter a valid ssn number');
        SSNnumbBool =false;
    }else { 
        setSuccessFor(SSNNumber);
         SSNnumbBool =true;
    }

    if(address1value ==='') {
        setErrorFor(address1 , 'Enter the address 1');
        addres1Bool = false;
    }else { 
        setSuccessFor(address1);
        addres1Bool = true;
    }

    if(address2value ==='') {
        setErrorFor(address2 , 'Enter the address 2');
        addres2Bool = false;
    }else { 
        setSuccessFor(address2);
        addres2Bool = true;
    }

    if(zipcodevalue ==='' || zipcodevalue.length!==5) {
        setErrorFor(zipcode , 'Enter a valid zip code bro!');
        zipCodeBool = false;
    }else { 
        setSuccessFor(zipcode);
        zipCodeBool = true;
    }
  
    console.log("asd");

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

  formControl.className = 'labelOfTheInput error';
 } 

 function setSuccessFor(input){
    const formControl = input.parentElement;
     
    formControl.className = 'labelOfTheInput success';

     
 }
 


function getState() {
    
    var zipString = document.getElementById("ZipCodeInput").value;

    console.log(zipString);

      /* Ensure param is a string to prevent unpredictable parsing results */
      if (typeof zipString !== 'string') {
          console.log('Must pass the zipcode as a string.');
          return;
      }
 
      /* Ensure we have exactly 5 characters to parse */
      if (zipString.length !== 5) {
          console.log('Must pass a 5-digit zipcode.');
          return;
      } 

      /* Ensure we don't parse strings starting with 0 as octal values */
      const zipcode = parseInt(zipString, 10); 

      let st;
      let state;

      /* Code cases alphabetized by state */
      if (zipcode >= 35000 && zipcode <= 36999) {
          st = 'AL';
          state = 'Alabama';
      } else if (zipcode >= 99500 && zipcode <= 99999) {
          st = 'AK';
          state = 'Alaska';
      } else if (zipcode >= 85000 && zipcode <= 86999) {
          st = 'AZ';
          state = 'Arizona';
      } else if (zipcode >= 71600 && zipcode <= 72999) {
          st = 'AR';
          state = 'Arkansas';
      } else if (zipcode >= 90000 && zipcode <= 96699) {
          st = 'CA';
          state = 'California';
      } else if (zipcode >= 80000 && zipcode <= 81999) {
          st = 'CO';
          state = 'Colorado';
      } else if (zipcode >= 6000 && zipcode <= 6999) {
          st = 'CT';
          state = 'Connecticut';
      } else if (zipcode >= 19700 && zipcode <= 19999) {
          st = 'DE';
          state = 'Delaware';
      } else if (zipcode >= 32000 && zipcode <= 34999) {
          st = 'FL';
          state = 'Florida';
      } else if (zipcode >= 30000 && zipcode <= 31999) {
          st = 'GA';
          state = 'Georgia';
      } else if (zipcode >= 96700 && zipcode <= 96999) {
          st = 'HI';
          state = 'Hawaii';
      } else if (zipcode >= 83200 && zipcode <= 83999) {
          st = 'ID';
          state = 'Idaho';
      } else if (zipcode >= 60000 && zipcode <= 62999) {
          st = 'IL';
          state = 'Illinois';
      } else if (zipcode >= 46000 && zipcode <= 47999) {
          st = 'IN';
          state = 'Indiana';
      } else if (zipcode >= 50000 && zipcode <= 52999) {
          st = 'IA';
          state = 'Iowa';
      } else if (zipcode >= 66000 && zipcode <= 67999) {
          st = 'KS';
          state = 'Kansas';
      } else if (zipcode >= 40000 && zipcode <= 42999) {
          st = 'KY';
          state = 'Kentucky';
      } else if (zipcode >= 70000 && zipcode <= 71599) {
          st = 'LA';
          state = 'Louisiana';
      } else if (zipcode >= 3900 && zipcode <= 4999) {
          st = 'ME';
          state = 'Maine';
      } else if (zipcode >= 20600 && zipcode <= 21999) {
          st = 'MD';
          state = 'Maryland';
      } else if (zipcode >= 1000 && zipcode <= 2799) {
          st = 'MA';
          state = 'Massachusetts';
      } else if (zipcode >= 48000 && zipcode <= 49999) {
          st = 'MI';
          state = 'Michigan';
      } else if (zipcode >= 55000 && zipcode <= 56999) {
          st = 'MN';
          state = 'Minnesota';
      } else if (zipcode >= 38600 && zipcode <= 39999) {
          st = 'MS';
          state = 'Mississippi';
      } else if (zipcode >= 63000 && zipcode <= 65999) {
          st = 'MO';
          state = 'Missouri';
      } else if (zipcode >= 59000 && zipcode <= 59999) {
          st = 'MT';
          state = 'Montana';
      } else if (zipcode >= 27000 && zipcode <= 28999) {
          st = 'NC';
          state = 'North Carolina';
      } else if (zipcode >= 58000 && zipcode <= 58999) {
          st = 'ND';
          state = 'North Dakota';
      } else if (zipcode >= 68000 && zipcode <= 69999) {
          st = 'NE';
          state = 'Nebraska';
      } else if (zipcode >= 88900 && zipcode <= 89999) {
          st = 'NV';
          state = 'Nevada';
      } else if (zipcode >= 3000 && zipcode <= 3899) {
          st = 'NH';
          state = 'New Hampshire';
      } else if (zipcode >= 7000 && zipcode <= 8999) {
          st = 'NJ';
          state = 'New Jersey';
      } else if (zipcode >= 87000 && zipcode <= 88499) {
          st = 'NM';
          state = 'New Mexico';
      } else if (zipcode >= 10000 && zipcode <= 14999) {
          st = 'NY';
          state = 'New York';
      } else if (zipcode >= 43000 && zipcode <= 45999) {
          st = 'OH';
          state = 'Ohio';
      } else if (zipcode >= 73000 && zipcode <= 74999) {
          st = 'OK';
          state = 'Oklahoma';
      } else if (zipcode >= 97000 && zipcode <= 97999) {
          st = 'OR';
          state = 'Oregon';
      } else if (zipcode >= 15000 && zipcode <= 19699) {
          st = 'PA';
          state = 'Pennsylvania';
      } else if (zipcode >= 300 && zipcode <= 999) {
          st = 'PR';
          state = 'Puerto Rico';
      } else if (zipcode >= 2800 && zipcode <= 2999) {
          st = 'RI';
          state = 'Rhode Island';
      } else if (zipcode >= 29000 && zipcode <= 29999) {
          st = 'SC';
          state = 'South Carolina';
      } else if (zipcode >= 57000 && zipcode <= 57999) {
          st = 'SD';
          state = 'South Dakota';
      } else if (zipcode >= 37000 && zipcode <= 38599) {
          st = 'TN';
          state = 'Tennessee';
      } else if ( (zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 88500 && zipcode <= 88599) ) {
          st = 'TX';
          state = 'Texas';
      } else if (zipcode >= 84000 && zipcode <= 84999) {
          st = 'UT';
          state = 'Utah';
      } else if (zipcode >= 5000 && zipcode <= 5999) {
          st = 'VT';
          state = 'Vermont';
      } else if (zipcode >= 22000 && zipcode <= 24699) {
          st = 'VA';
          state = 'Virgina';
      } else if (zipcode >= 20000 && zipcode <= 20599) {
          st = 'DC';
          state = 'Washington DC';
      } else if (zipcode >= 98000 && zipcode <= 99499) {
          st = 'WA';
          state = 'Washington';
      } else if (zipcode >= 24700 && zipcode <= 26999) {
          st = 'WV';
          state = 'West Virginia';
      } else if (zipcode >= 53000 && zipcode <= 54999) {
          st = 'WI';
          state = 'Wisconsin';
      } else if (zipcode >= 82000 && zipcode <= 83199) {
          st = 'WY';
          state = 'Wyoming';
      } else {
          st = 'none';
          state = 'none';
          console.log('No state found matching', zipcode);
      }
  
      let  stateDropdown = document.getElementById("stateDropdown");
    
      stateDropdown.value = st;
  
      return state;
}
 