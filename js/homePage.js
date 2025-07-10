import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getDatabase, ref, get, set, update } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

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
const username = localStorage.getItem("loggedInUsername");

if (username) {
  const userRef = ref(database, "users/" + username);

  // فحص البيانات قبل التحديث
  get(userRef).then((snapshot) => {
    const data = snapshot.val();

    // إذا البيانات مش موجودة أو ما فيها age أو address أو isActive
    if (!data?.age && !data?.address && !data?.isActive) {
      update(userRef, {
        age: 20,
        address: "Amman",
        isActive: true
      }).then(() => {
        console.log("User data updated for first time");
      }).catch((error) => {
        console.error("Error updating user data:", error);
      });
    } else {
      console.log("User already has data, update skipped");
    }
  }).catch((error) => {
    console.error("Error checking user data:", error);
  });
} else {
  console.error("User ID not found in localStorage");
}



































window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUsername');
  if (username) {
    document.getElementById('username').textContent = username;
  } else {
   
    window.location.href = 'login.html';
  }
});