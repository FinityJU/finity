const salary = document.getElementById("salary");
const Housing = document.getElementById("Housing");
const Food = document.getElementById("Food");
const Transportation = document.getElementById("Transportation");
const Bills = document.getElementById("Bills");
const PersonalNeeds = document.getElementById("PersonalNeeds");
const Discretionary = document.getElementById("Discretionary");
const Investment = document.getElementById("Investment");
const Savings = document.getElementById("Savings");
const calc = document.getElementById("calc");
const error = document.getElementById("error");
const salary1 = document.getElementById("salary1");
const hide = document.getElementById("hide");
function start(){
    if(salary.value>0){
    calc.style.display = "block";
    salary1.value = salary.value;
    hide.style.display="none";
}
else{
error.style.display = "block";
}
    
}
function calculate(){
    calc.style.display = "none";
}
function goToPage(){
    window.location.href = "homePage.html";
}