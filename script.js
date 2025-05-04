const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function showForm(role) {
  // Seçim panelini gizle
  document.getElementById("roleSelect").style.display = "none";

  // Formları kontrol et
  if (role === "ogrenci") {
    document.getElementById("ogrenciForm").style.display = "block";
  } else if (role === "danisman") {
    document.getElementById("danismanForm").style.display = "block";
  }
}