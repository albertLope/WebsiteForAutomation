// JavaScript source code


var sbmButton = document.getElementById("sbmButton");
var creditCount =0; 

sbmButton.addEventListener('click', (e) => {
    e.preventDefault();

    var check = checkInputs();
    console.log(check);

    var paymentDropdwon = document.getElementById("paymentDropdwon");
    var Department = document.getElementById("Department");

     localStorage.setItem("cardName", paymentDropdwon.value);
     localStorage.setItem("Department", Department.value);


    if(check===true){
        window.location.href = "SchoolFormThankYouPage.html";
    }else{
        console.log("there is an error");
    }
});
 


const Department = document.getElementById("Department");
const paymentDropdwon = document.getElementById("paymentDropdwon");
const cardNum= document.getElementById("cardNum");
const ExpireDateMonth = document.getElementById("ExpireDateMonth");
const ExpireDateYear = document.getElementById("ExpireDateYear");
const firstNameInput = document.getElementById("firstNameInput");
 

function checkInputs() {

    const DepartmentValue = Department.value.trim();
    const paymentDropdwonValue = paymentDropdwon.value.trim();
    const cardNumValue = cardNum.value.trim();
    const ExpireDateMonthValue = ExpireDateMonth.value.trim();
    const ExpireDateYearValue = ExpireDateYear.value.trim();
    const firstNameInputValue = firstNameInput.value.trim();
   

    var DepartBool = false;
    var paymentDropBool = false;
    var CardNumBool = false;
    var ExpireDateMonthBool = false;
   
    var firstNameBool = false;
   
    
    if(DepartmentValue ==='Department') {
        setErrorFor(Department , 'Enter the department name');
        DepartBool =false;
    }else { 
        setSuccessFor(Department);
        DepartBool =true;
    }

    if(paymentDropdwonValue ==='Select Card') {
        setErrorFor(paymentDropdwon , 'Select the payment type');
         paymentDropBool =false;
    }else { 
        setSuccessFor(paymentDropdwon);
         paymentDropBool =true;
    }
    
    if(cardNumValue === '' ) {
        setErrorFor(cardNum, 'Enter the card number');
        CardNumBool = false;
    }else { 
        setSuccessFor(cardNum);
        CardNumBool = true;
    }

    if(ExpireDateMonthValue === 'SMonth' || ExpireDateYearValue === 'SYear'  ) {
        setErrorFor(ExpireDateMonth, 'Expire date is not valid ');
        ExpireDateMonthBool = false;
    }else { 
        setSuccessFor(ExpireDateMonth);
        ExpireDateMonthBool = true;
    }

     if(firstNameInputValue === '' ) {
        setErrorFor(firstNameInput, 'Enter the card name');
        firstNameBool = false;
    }else { 
        setSuccessFor(firstNameInput);
        firstNameBool = true;
    }
     
             console.log(DepartBool);
             console.log(paymentDropBool);
            console.log(CardNumBool);
            console.log(ExpireDateMonthBool);
           
            console.log(firstNameBool);

 
    if(DepartBool === false ||paymentDropBool === false ||CardNumBool === false ||ExpireDateMonthBool === false ||firstNameBool === false){

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
     



var departmentDropdown = document.getElementById("Department");
$(document).ready(function() {
    
 
    var classDropdownCount = document.querySelectorAll(".classDropdowns select");
   

    // each click adding to the dropdown I need to remove it if the user click second time
    $('#Department').change(function(){
       
        
     for(var j = 0 ; j < classDropdownCount.length ; j++){
       
        removeAllDataAndMakeDropdownsHidden(j);

     }
     creditCount = 0;
      
        $("#creditDisplay").text(creditCount);
            var departmentDropdownValue = departmentDropdown.value;
            var items=selectAClass(departmentDropdownValue);
             
            for(var i= 0 ; i< items.length ; i++){
                $(classDropdownCount[0]).append(new Option(items[i], items[i]));
                $(classDropdownCount[0]).parent().attr("class" , "labelAndInput classDropdowns show" );
            }
        
    });

    $('#Class1').change(function(){
     
             var departmentDropdownValue = departmentDropdown.value;
             var items=selectAClass(departmentDropdownValue);
                
             var class1Element = document.getElementById("Class1").value;

             var allElements = [class1Element]
                
             items = removeElementFromArray(items ,class1Element);

             for(var i= 0 ; i< items.length ; i++){
                  
                $(classDropdownCount[1]).append(new Option(items[i], items[i]));
                $(classDropdownCount[1]).parent().attr("class" , "labelAndInput classDropdowns show" );
             }

            ClassCreditCounter();
    });

    $('#Class2').change(function(){

                var departmentDropdownValue = departmentDropdown.value;
                var items=selectAClass(departmentDropdownValue);
                
                var class1Element = document.getElementById("Class1").value;
                var class2Element = document.getElementById("Class2").value;
                
                var values = [class1Element,  class2Element];

                items = removeElementFromArray(items , values);

           for(var i= 0 ; i< items.length ; i++){
               
                $(classDropdownCount[2]).append(new Option(items[i], items[i]));
                $(classDropdownCount[2]).parent().attr("class" , "labelAndInput classDropdowns show" );
           }
           
           ClassCreditCounter();
        });


    $('#Class3').change(function(){

                var departmentDropdownValue = departmentDropdown.value;
                var items=selectAClass(departmentDropdownValue);
                
                var class1Element = document.getElementById("Class1").value;
                var class2Element = document.getElementById("Class2").value;
                var class3Element = document.getElementById("Class3").value;
                var values = [class1Element,  class2Element, class3Element];

                items = removeElementFromArray(items , values);

           for(var i= 0 ; i< items.length ; i++){
               
                $(classDropdownCount[3]).append(new Option(items[i], items[i]));
                $(classDropdownCount[3]).parent().attr("class" , "labelAndInput classDropdowns show" );
           }
           
            ClassCreditCounter();
        });
       
    $('#Class4').change(function(){
       
           
            ClassCreditCounter();
        });
      
}); 

 
function removeAllDataAndMakeDropdownsHidden(number){
    
   var classDropdownCount = document.querySelectorAll(".classDropdowns Option");
    console.log(classDropdownCount)
     
      do{
           $(classDropdownCount[number]).parent().parent().attr("class" , "labelAndInput classDropdowns" );
           $(classDropdownCount[number]).remove();
           classDropdownCount = document.querySelectorAll(".classDropdowns Option");
       }while(classDropdownCount.length>0);
}
 
function selectAClass(departmentDropdownValue){
        var items= [];

          if(departmentDropdownValue === "Accounting"){
                items=["Choose your class","Acct & Financial Report" , "Strategic Cost Analysis" , "Fin Measurement & Disclo" , "Acct & Business Analysis","Principles of Macroeconomics" , "Survey of Calculus","Calculus I" , "Business Ethics" , "Business Law I","Financial Management"];
            }else if(departmentDropdownValue==="Architecture"){
                items=["Choose your class","Critical Reading and Research 1" , "Portfolio Review" , "Community Practice" , "Making and Modeling","Spatial Thinking" , "Social and Political Theory","Physics" , "Structures 1" , "Design Media or Workshop","Building Systems"];
            }else if(departmentDropdownValue==="Art and Visual Culture"){
                items=["Choose your class","Critical Reading and Research 1" , "Bound Art & Visual Culture Journal" , "Performance Art Diary" , "Surrealism Collage: How do we get people to think?","Totem Sculpture" , "Entomology Sculpture","Art" , "Structures 1" , "Design Media or Workshop","Building Systems"];
            }else if(departmentDropdownValue==="Biology"){
                items=["Choose your class","Biochemistry" , "Bioinformatics" , "Cell biology" , "Developmental biology","Computational biology" , "Ecology","Evolutionary ecology" , "Genetics" , "Genomics","Human biology"];
            }else if(departmentDropdownValue==="Finance"){
                items=["Choose your class","Principles of Financial Accounting" , "Financial Modeling and Analysis" , "Special Topics in Finance" , "College Algebra","	Financial Management" , "Organizational Behavior","Strategic Management" , "Business Ethics" , "Genomics","Business and Society"];
            }

            return items;

}

function removeElementFromArray(items, values){
    
    for(var i = 0 ; i < items.length ; i++){
        for(var j = 0 ; j < values.length ; j++){
            
             if ( items[i] === values[j]){
                    items.splice(i,1);
             }
        }
    }
    return items;
}


function ClassCreditCounter(){
  
console.log(123);
    var classes= [$('#Class1').val(), $('#Class2').val(),$('#Class3').val() , $('#Class4').val()] ;
    creditCount=0;
    for ( var i = 0 ; i < classes.length ; i++){
    if(classes[i]==="Acct & Financial Report" || classes[i]==="Strategic Cost Analysis"
    || classes[i]==="Fin Measurement & Disclo" || classes[i]==="Acct & Business Analysis" 
    ||classes[i]==="Critical Reading and Research 1" ||classes[i]==="Portfolio Review" ||classes[i]==="Community Practice" 
    || classes[i]==="Making and Modeling" || classes[i]==="Spatial Thinking"|| classes[i]==="Critical Reading and Research 1"
    || classes[i]==="Totem Sculpture"|| classes[i]==="Entomology Sculpture"|| classes[i]==="Art"
    || classes[i]==="computational biology"|| classes[i]==="ecology"|| classes[i]==="evolutionary ecology"|| classes[i]==="genetics"
    || classes[i]==="human biology"|| classes[i]==="Organizational Behavior" || classes[i]==="Strategic Management"
    ||classes[i]==="Genomics " ||classes[i]==="Business and Society"
    ){
    creditCount+=3;
    }else if(classes[i]==="Principles of Macroeconomics" || classes[i]==="Survey of Calculus" 
    ||classes[i]==="Calculus I"||classes[i]==="Business Ethics"
    ||classes[i]==="Business Law I"||classes[i]==="Financial Management"
    || classes[i]==="Social and Political Theory"|| classes[i]==="Physics"|| classes[i]==="Structures 1" 
    || classes[i]==="Design Media or Workshop"|| classes[i]==="Building Systems"
    || classes[i]==="Bound Art & Visual Culture Journal"|| classes[i]==="Performance Art Diary"|| classes[i]==="Surrealism Collage: How do we get people to think?"
    || classes[i]==="biochemistry"|| classes[i]==="bioinformatics"|| classes[i]==="cell biology"|| classes[i]==="developmental biology"
    || classes[i]==="Principles of Financial Accounting" || classes[i]==="Financial Modeling and Analysis" 
    || classes[i]==="Special Topics in Finance"  || classes[i]==="College Algebra" || classes[i]==="Financial Management" 
    ){
     creditCount+=2;
    } 
           
    $("#creditDisplay").text(creditCount);   
    }
    return creditCount;
}



  function lettersOnly() {
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}
