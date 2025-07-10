
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAkyYiU_EBVhySDTqW--E5JCAaSi2K8iyo",
    authDomain: "fintech-59d68.firebaseapp.com",
    databaseURL: "https://fintech-59d68-default-rtdb.firebaseio.com",
    projectId: "fintech-59d68",
    storageBucket: "fintech-59d68.appspot.com",  
    messagingSenderId: "370957275224",
    appId: "1:370957275224:web:dc918afa6d657504a4ba2d",
    measurementId: "G-WEQG4YB0FR"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app); 
let emailInputElement = document.getElementById("email");
let passwordInputElement = document.getElementById("password");
let error=document.getElementById("error");

function login(emailInput, passwordInput) {
  const usersRef = ref(database, 'users');

  get(usersRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        let found = false;

        for (const userId in usersData) {
          const user = usersData[userId];
          if (user.username === emailInput && user.password === passwordInput) {
             localStorage.setItem('loggedInUsername', user.username);
            found = true;
            break;
          }
        }

        if (found) {
          window.location.href = "homePage.html";
        } else {
          error.style.display = "block";
         
        }
      } else {
        console.warn("No users found in database.");
      }
    })
    .catch((error) => {
      console.error("Error reading users data:", error);
    });

}

const form = document.getElementById("loginForm"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
login(nameValue, passwordValue);

})
  

  

