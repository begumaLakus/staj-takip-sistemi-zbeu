
document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
  
    fetch("/api/internship/me", {
      headers: { Authorization: "Bearer " + token }
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("advisorStatus").innerText = data.advisorApproved ? "Onaylandı ✅" : "Onay Bekliyor ❗";
        document.getElementById("documentStatus").innerText = data.mandatoryDocumentUploaded ? "Yüklendi ✅" : "Eksik ❗";
        document.getElementById("weeksTotal").innerText = data.totalWeeks || "-";
        document.getElementById("weeksCompleted").innerText = data.reportsSubmitted || "0";
        document.getElementById("weeksMissing").innerText = (data.reportsMissing || []).join(", ") || "Yok";
      })
      .catch(() => {
        alert("Staj süreci bilgileri yüklenemedi.");
      });
  });
  