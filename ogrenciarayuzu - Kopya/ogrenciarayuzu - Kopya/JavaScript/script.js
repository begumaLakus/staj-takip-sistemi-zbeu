// Tüm öğeler yüklendikten sonra çalıştır
document.addEventListener('DOMContentLoaded', function() {
    // Menü linkleri ve ilgili bölümler
    const menuLinks = document.querySelectorAll('.menu li a');
    const sections = document.querySelectorAll('.section-content');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const logoutBtnTop = document.getElementById('logoutBtnTop');
  
    // Menü linklerine tıklama olayları
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-section');
        if (targetSection === 'cikis') {
          // Çıkış işlemi (örnek: kullanıcıyı çıkışa yönlendir)
          alert('Oturumunuz kapatıldı.');
          // Gerçek bir senaryoda buraya yönlendirme kodu gelebilir:
          // window.location.href = 'login.html';
          return;
        }
        // Aktif menü öğesini güncelle
        const currentActive = document.querySelector('.menu li.active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.parentElement.classList.add('active');
        // İlgili bölümü göster, diğerlerini gizle
        sections.forEach(sec => {
          if (sec.id === targetSection) {
            sec.classList.add('active');
          } else {
            sec.classList.remove('active');
          }
        });
        // Mobil ekranda seçim yapıldıktan sonra menüyü kapat
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('show');
          // Menü ikonunu tekrar "☰" yap
          menuToggle.innerText = '☰';
        }
      });
    });
  
    // Mobil menü aç/kapa butonu
    menuToggle.addEventListener('click', function() {
      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        this.innerText = '☰';
      } else {
        sidebar.classList.add('show');
        this.innerText = '✖';
      }
    });
  
    // Üst bardaki Çıkış Yap butonu
    logoutBtnTop.addEventListener('click', function() {
      alert('Oturumunuz kapatıldı.');
      // window.location.href = 'login.html';
    });
  });
  