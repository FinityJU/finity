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
  let error=document.getElementById("error");
   function addUser(email1, password1, username1) {
  if (
  email1.endsWith("@gmail.com") &&
  password1.length > 8 &&
  username1.length > 5
){
        const userName = username1;
        const userRef = ref(database, "users/" + userName); // تأكد من كتابة users وليس user

        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log("User already exists.");
            } else {
              set(userRef, {
                email:email1,
                password:password1,
              })
                .then(() => {
                     window.location.href = "login.html";
                })
                .catch((error) => {
                  console.error("Error adding user:", error);
                });
            }
          })
          .catch((error) => {
            console.error("Error reading data:", error);
          });
      }
    else{
      error.style.display = "block";
    }
    
    }




      const form = document.getElementById("loginForm"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();
const email1 = document.getElementById("email").value;
const password1 = document.getElementById("password").value;
const username1 = document.getElementById("UserName").value;
addUser(email1, password1, username1);

})