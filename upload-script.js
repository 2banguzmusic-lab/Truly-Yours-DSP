// ===== Upload Script (Truly Yours DSP v2) =====

// use initialized firebase app
import { app } from "./firebase-init.js";

import {
  getStorage,
  ref,
  uploadBytesResumable
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const storage = getStorage(app);

// ===== UPLOAD SONG =====
window.uploadSong = () => {
  const choose = document.getElementById("musicFile");
  const status = document.getElementById("uploadStatus");

  if (!choose.files.length) {
    status.innerText = "⚠️ Select an MP3 file first.";
    return;
  }

  const file = choose.files[0];

  // prevent duplicate names — append timestamp
  const filename = `${Date.now()}-${file.name}`;

  // 🚨 folder must match Firebase
  const filePath = ref(storage, `artists_audio/${filename}`);

  const uploadTask = uploadBytesResumable(filePath, file);

  status.innerText = "Uploading...";

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const pct = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      status.innerText = `Uploading... ${pct}%`;
    },
    (error) => {
      status.innerText = `❌ Upload failed: ${error.message}`;
    },
    () => {
      status.innerText = `✅ Upload complete! Refresh dashboard to see it.`;
    }
  );
};
