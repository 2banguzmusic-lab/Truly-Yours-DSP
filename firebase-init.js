// firebase-init.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyB9b9me_xmEorNFSMPHsTiDP4u7Pc6jfA",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.appspot.com",
  messagingSenderId: "369021987682",
  appId: "1:369021987682:web:dbe97e15e0b8fb8bc3bb09"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
