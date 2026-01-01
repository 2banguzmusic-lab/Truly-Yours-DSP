// ===========================
// TRULY YOURS DSP - AUTH.JS
// Login • Signup • Logout
// ===========================

// ———— INSERT YOUR FIREBASE CONFIG ————
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// ————————————————————————————————

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// ============== LOGIN UI ==============

loginBtn.addEventListener("click", () => {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Welcome back!");
      location.reload();
    })
    .catch(err => {
      if (err.code === "auth/user-not-found") {
        if (confirm("User not found. Create account?")) {
          signUp(email, password);
        }
      } else {
        alert(err.message);
      }
    });
});

// ============== SIGNUP ==============

function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created! You're signed in.");
      location.reload();
    })
    .catch(err => {
      alert(err.message);
    });
}

// ============== LOGOUT ==============

logoutBtn.addEventListener("click", () => {
  auth.signOut().then(() => {
    alert("Logged out.");
    location.reload();
  });
});

// ============== UI STATE ==============
// show upload only when logged in
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Logged in:", user.email);
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    console.log("Not logged in");
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
  }
});
