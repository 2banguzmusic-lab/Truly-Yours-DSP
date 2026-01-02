// === TRULY YOURS DSP LOGIN SCRIPT ===

// FULL FIREBASE CONFIG (this part is required for login to work)
const firebaseConfig = {
  apiKey: "AIzaSyBLglbCVyrTo1DsW1ULX9LgcxKsC5P5yX0",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.appspot.com",
  messagingSenderId: "682331089708",
  appId: "1:682331089708:web:19942a9ec8ec006c3b1796"
};

// initialize firebase + auth system
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// find login and logout buttons if they exist
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// --- LOGIN POP-UP ---
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Logged in! Refresh the page.");
      })
      .catch(error => {
        if (error.code === "auth/user-not-found") {
          if (confirm("User not found. Create an account?")) {
            auth.createUserWithEmailAndPassword(email, password)
              .then(() => alert("Account created! Refresh the page."))
              .catch(err => alert(err.message));
          }
        } else {
          alert(error.message);
        }
      });
  });
}

// --- LOGOUT ---
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      alert("Logged out!");
      location.reload();
    });
  });
}

// === END OF LOGIN SCRIPT ===
