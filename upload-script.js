// upload-script.js

import { storage } from "./firebase-init.js";
import { ref, uploadBytesResumable } 
  from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

window.uploadSong = () => {
  const choose = document.getElementById("musicFile");
  const status = document.getElementById("uploadStatus");

  if (!choose.files.length) {
    status.innerText = "Pick a file first";
    return;
  }

  const file = choose.files[0];
  const filename = Date.now() + "-" + file.name;
  const path = ref(storage, "artists_audio/" + filename);

  const upload = uploadBytesResumable(path, file);

  upload.on("state_changed",
    (snap) => {
      const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      status.innerText = `Uploading... ${pct}%`;
    },
    (err) => status.innerText = "❌ " + err.message,
    () => status.innerText = "✅ Upload complete!"
  );
};

