// Firebase config (replace later with full key)
const firebaseConfig = { projectId: "truly-yours-dsp-2025" };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const loginBtn = document.getElementById("loginBtn");

// Login popup logic
loginBtn.addEventListener("click", () => {
  const email = prompt("Email:");
  const password = prompt("Password:");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in! Reload the page."))
    .catch(err => {
      if (err.code === "auth/user-not-found") {
        if (confirm("No account found — create one?")) {
          auth.createUserWithEmailAndPassword(email, password)
            .then(() => alert("Account created! Reload the page."))
        }
      } else {
        alert(err.message);
      }
    });
});
