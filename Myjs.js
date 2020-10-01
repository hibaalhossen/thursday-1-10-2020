var currentAge = prompt("What is your age?");
var RetireAge = prompt("what age would you like to retire? ");



 if (currentAge == null || isNaN(Number(currentAge)) || currentAge < 0) {
     currentAge = prompt("Please enter your current age as a number");

 }
 if ( RetireAge == null || isNaN(Number(RetireAge))  || RetireAge < 0) {
     RetireAge = prompt("Please enter your retire age as a number");
     
 } 
 else if (currentAge >= RetireAge) {
     currentAge = prompt("Retirement age can not be less than your current age");
     
 } else  {
    var  dif = RetireAge - currentAge;
    document.writeln(' You have '+ dif + ' years left until you can retire <br>'  );
    
 }
 var RetirementYear = new Date().getFullYear() + dif;
    document.writeln("it's "+ new Date().getFullYear() +" so you can retire in "+ RetirementYear);



