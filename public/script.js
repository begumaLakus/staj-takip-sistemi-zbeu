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
























document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector('.oturum-ac form');

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        alert("Giriş başarılı!");
        window.location.href = "dashboard.html"; // veya başka bir sayfa
      } else {
        alert(data.msg || "Giriş başarısız");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Sunucu hatası.");
    }
  });
});
  



























fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'ogrenci@example.com',
    password: '123456'
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // localStorage'a token kaydet
    // yönlendirme yap
  });








  fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'ali@example.com',
      password: '123456',
      student_number: '2020123456',
      role: 'student',
      first_name: 'Ali',
      last_name: 'Yılmaz'
    })
  })
    .then(res => res.json())
    .then(data => console.log(data));

  
    localStorage.setItem('token', data.token);


    fetch('http://localhost:5000/api/internships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        user_id: '6652abc...', // veya backend'den gelen id
        company_name: 'Şirket A',
        start_date: '2024-06-01',
        end_date: '2024-07-31'
      })
    });

    

    if (data.msg) {
      alert(data.msg);
    }
    