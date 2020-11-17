// JavaScript source code
	
	
var radioButtons = document.getElementsByClassName("diffSchool");

radioButtons[0].addEventListener("click", makeTHeSchoolNameAndGradeVisible)
radioButtons[1].addEventListener("click", makeTHeSchoolNameAndGradeUNVisible)

function makeTHeSchoolNameAndGradeVisible(){
	
	var element = document.getElementById("GradeAndSchoolName");
    var element2 = document.getElementById("GradeAndSchoolName2");
    
 
	element.className = "GradeAndSchoolName makeVisible";
    element2.className = "GradeAndSchoolName2 makeVisible";
}	

function makeTHeSchoolNameAndGradeUNVisible(){
	
	var element = document.getElementById("GradeAndSchoolName");
    var element2 = document.getElementById("GradeAndSchoolName2");
	element.className = "GradeAndSchoolName";
    element2.className = "GradeAndSchoolName2";
}	



const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("LastNameInput");
const DOBDay= document.getElementById("DOBDay");
const DOBMonth = document.getElementById("DOBMonth");
const DOBYear = document.getElementById("DOBYear");
const Ethnic_Group = document.getElementById("Ethnic_Group");
const Gender = document.getElementById("Gender");
const YESRadioButton = document.getElementById("YESRadioButton"); 
const NORadioButton = document.getElementById("NORadioButton"); 
const GradeAndSchoolName = document.getElementById("GradeAndSchoolName"); 
const schoolName = document.getElementById("schoolName"); 
const Grade = document.getElementById("Grade"); 
 
const submitButton = document.getElementById("sbmButton");
  
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    var check = checkInputs();
    console.log(check);

    var allvalues = document.getElementsByClassName("formInput");

     localStorage.setItem("firstName", allvalues[0].value);
     localStorage.setItem("lastName", allvalues[1].value);

      

    if(check===true){
        window.location.href = "SchoolFormPage2.html";
    }else{
        console.log("there is an error");
    }
});

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const DOBDayvalue = DOBDay.value.trim();
    const DOBMonthvalue = DOBMonth.value.trim();
    const DOBYearvalue = DOBYear.value.trim();
    const Ethnic_Groupvalue = Ethnic_Group.value.trim();
    const Gendervalue = Gender.value.trim();
    const YESRadioButtonvalue = YESRadioButton.value.trim();
    const NORadioButtonvalue  = NORadioButton.value.trim();
    const GradeAndSchoolNamevalue  = GradeAndSchoolName.value;
    const schoolNamevalue  = schoolName.value.trim();
    const Gradevalue  = Grade.value.trim();

    var fNameBool = false;
    var lNameBool = false;
    var DOBDayBool = false;
    var DOBMonthBool = false;
    var DOBYearBool = false;
    var Ethnic_GroupBool = false;
    var GenderBool = false;
    var YESRadioButtonBool = false;
    var NORadioButtonBool = false;
    var schoolNameBool = false; 
    var GradevalueBool = false; 
    
    if(firstNameValue ==='') {
        setErrorFor(firstName , 'Enter the first name');
        fNameBool =false;
    }else { 
        setSuccessFor(firstName);
        fNameBool =true;
    }

    if(lastNameValue ==='') {
        setErrorFor(lastName , 'Enter the last name');
         lNameBool =false;
    }else { 
        setSuccessFor(lastName);
         lNameBool =true;
    }
   
    if(DOBDayvalue ==='Day' || DOBMonthvalue ==='Month' || DOBYearvalue ==='Year') {
        setErrorFor(DOBDay , 'DOB is not valid');
        DOBMonthBool =false;
    }else { 
        setSuccessFor(DOBDay);
        DOBMonthBool =true;
    }
  
    if(Ethnic_Groupvalue === 'Group' ) {
        setErrorFor(Ethnic_Group, 'Select the ethnic group');
        Ethnic_GroupBool = false;
    }else { 
        setSuccessFor(Ethnic_Group);
        Ethnic_GroupBool = true;
    }

    if(Gendervalue === 'Gender' ) {
        setErrorFor(Gender, 'Select the gender');
        GenderBool = false;
    }else { 
        setSuccessFor(Gender);
        GenderBool = true;
    }
  
   if(YESRadioButton.checked==false && NORadioButton.checked==false ){
     
        setErrorFor(YESRadioButton, 'Please choose yes or no');
        YESRadioButtonBool = false;
        NORadioButtonBool = false;
   }else if(YESRadioButton.checked==true){
      
        setSuccessFor(YESRadioButton);
        YESRadioButtonBool = true;
        NORadioButtonBool=false;
   }else if(NORadioButton.checked==true){
   
        setSuccessFor(YESRadioButton);
        YESRadioButtonBool = false;
        NORadioButtonBool=true;
   }
    
   var yesNoResult = false; 

   if(YESRadioButtonBool==true ||NORadioButtonBool ==true){
    yesNoResult=true;
   }

   if(YESRadioButtonBool==true){
         
        if(schoolNamevalue==''){
           
          const formControl = schoolName.parentElement;
          const small = formControl.querySelector('small');

          small.innerText = "Enter the school name";

          formControl.className = 'labelAndInput GradeAndSchoolName makeVisible error';
          schoolNameBool = false;

        }else{
         
         const formControl = schoolName.parentElement;
     
         formControl.className = 'labelAndInput GradeAndSchoolName makeVisible success';    
         schoolNameBool = true;
        }

        if(Gradevalue=="Grade"){
          const formControl = Grade.parentElement;
          const small = formControl.querySelector('small');

          small.innerText = "Select the grade";

          formControl.className = 'labelAndInput GradeAndSchoolName2 makeVisible error';
          GradevalueBool = false;
           
        }else{
            
            const formControl = Grade.parentElement;
            
            formControl.className = 'labelAndInput GradeAndSchoolName2 makeVisible success';    
             
            GradevalueBool = true;
        }

    }

    console.log("-------------------");
    console.log(fNameBool);
        console.log(lNameBool);
            console.log(DOBMonthBool);
        console.log(Ethnic_GroupBool);
           console.log(GenderBool);
        console.log(yesNoResult);
          
        console.log(schoolNameBool);
            console.log(GradevalueBool);
  
       
    if(fNameBool === false ||lNameBool === false ||DOBMonthBool === false ||Ethnic_GroupBool === false ||GenderBool === false||yesNoResult === false){

        return false;
    }else {
        console.log("cons 1");
        console.log(YESRadioButtonBool);
        console.log(schoolNameBool);
        console.log(GradevalueBool);
         
        if(YESRadioButtonBool===true){
            if(schoolNameBool === false || GradevalueBool === false){
            console.log("cons 2");
            return false;
          }
        }
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
