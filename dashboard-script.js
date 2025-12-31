// ===== Dashboard Script (Truly Yours DSP v2) =====

// pull initialized firebase app from firebase-init.js
import { app } from "./firebase-init.js";

import {
  getStorage,
  ref,
  listAll,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const storage = getStorage(app);
const songList = document.getElementById("songList");

// ===== Load Songs from Storage =====
async function loadSongs() {
  songList.innerHTML = "Loading… 🔄";

  try {
    // 🚨 THIS FOLDER NAME MUST MATCH FIREBASE EXACTLY
    const folder = ref(storage, "artists_audio/");
    const items = await listAll(folder);

    if (!items.items.length) {
      songList.innerHTML = "<li>No songs uploaded yet 🔥</li>";
      return;
    }

    songList.innerHTML = "";

    for (const fileRef of items.items) {
      const url = await getDownloadURL(fileRef);

      const fileName = fileRef.name.replace(/^\d+-/, ""); // remove timestamp prefix

      const li = document.createElement("li");
      li.innerHTML = `
        🎵 <strong>${fileName}</strong><br>
        <button onclick="playSong('${url}')">▶️ Play</button>
      `;
      songList.appendChild(li);
    }
  } catch (err) {
    songList.innerHTML = "⚠️ Error loading songs: " + err.message;
  }
}

// ===== PLAY SONG =====
window.playSong = (url) => {
  const audio = new Audio(url);
  audio.play();
};

loadSongs();
