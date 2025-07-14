const salary = document.getElementById("salary");
const Housing = document.getElementById("Housing");
const Food = document.getElementById("Food");
const Transportation = document.getElementById("Transportation");
const Bills = document.getElementById("Bills");
const PersonalNeeds = document.getElementById("PersonalNeeds");
const Luxuries = document.getElementById("Luxuries");
const Investment = document.getElementById("Investment");
const Savings = document.getElementById("Savings");
const calc = document.getElementById("calc");
const error = document.getElementById("error");
const salary1 = document.getElementById("salary1");
const hide = document.getElementById("hide");
const button = document.getElementById("button");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let final = document.getElementById("final");
let thanks = document.getElementById("thankyou");
const error3=document.getElementById("error3");

let total = 0;
function start() {
  if (salary.value > 0) {
    calc.style.opacity = "1";
    button.style.opacity = "1";
    salary1.value = salary.value;
    hide.style.display = "none";
  } else {
    error.style.display = "block";
  }
}
function calculate() {

  if(Housing.value>0 && Food.value>=0 && Transportation.value>=0 && Bills.value>=0 && PersonalNeeds.value>=0 && Luxuries.value>=0 && Investment.value>=0 && Savings.value>=0){
  calc.style.display = "none";
  button.style.display = "none";
    total =
    salary.value -
    Housing.value -
    Food.value -
    Transportation.value -
    Bills.value -
    PersonalNeeds.value -
    Luxuries.value -
    Investment.value -
    Savings.value;
  if (total > 0 && total < 200) {
    result1.style.display = "block";
    result.style.display = "block";
    thanks.style.display = "block";
    final.innerHTML = "You have a surplus of " + total + " JOD";
  } else if (total === 0) {
    result2.style.display = "block";
    result.style.display = "block";
    thanks.style.display = "block";
    final.innerHTML = "You have no surplus or deficit. Your balance is zero.";
  } else if (total < 0) {
    result3.style.display = "block";
    result.style.display = "block";
    thanks.style.display = "block";
    final.innerHTML = "You have a deficit of " + Math.abs(total) + " JOD";
  } else if (total >= 200) {
    result4.style.display = "block";
    result.style.display = "block";
    thanks.style.display = "block";
    final.innerHTML = "You have a large surplus of " + total + " JOD";
  }
  }
  else{
error3.style.display="block";
  }
}
function goToPage() {
  window.location.href = "homePage.html";
}
window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUsername');
  if (username) {
    document.getElementById('username').textContent = username;
  } else {
    window.location.href = 'login.html';
  }
});
