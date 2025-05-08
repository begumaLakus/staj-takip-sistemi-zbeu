const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");



document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const role = document.getElementById("loginRole").value;

  // Backend'e veri gönder
  fetch("backend/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&role=${role}`,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        // Backend'den gelen role bilgisine göre yönlendirme
        if (data.role === "student") {
          window.location.href = "ogrenci-panel.html";
        } else if (data.role === "advisor") {
          window.location.href = "danisman-panel.html";
        }
      } else {
        alert("Giriş bilgileri hatalı!");
      }
    })
    .catch((error) => {
      console.error("Giriş sırasında bir hata oluştu:", error);
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
    