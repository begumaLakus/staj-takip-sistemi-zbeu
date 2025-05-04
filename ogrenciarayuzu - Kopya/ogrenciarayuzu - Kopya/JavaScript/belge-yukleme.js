
document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");
  
    uploadBtn.addEventListener("click", () => {
      const file = fileInput.files[0];
      if (!file) return alert("Lütfen bir dosya seçin.");
  
      const formData = new FormData();
      formData.append("file", file);
  
      fetch("/api/documents", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
        },
        body: formData
      })
        .then(res => {
          if (!res.ok) throw new Error("Yükleme başarısız");
          return res.json();
        })
        .then(() => alert("Dosya başarıyla yüklendi."))
        .catch(err => alert("Hata: " + err.message));
    });
  });
  