// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9Wc9me_xmVEorMVSPMHtD9lqQ7P6zjJA",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.appspot.com",   // IMPORTANT — THIS ONE
  messagingSenderId: "369021879682",
  appId: "1:369021879682:web:ded7b7e150ab8fbb3cbb9b"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

