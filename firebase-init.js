// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSy....",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.appspot.com",
  messagingSenderId: "88372...",
  appId: "1:88372...:web:98ad...."
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

