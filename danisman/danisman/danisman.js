document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu li a");
    const sections = document.querySelectorAll(".section");
  
    menuItems.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Tüm section'ları gizle
        sections.forEach(sec => sec.classList.remove("active"));
  
        // Tüm menü öğelerinden aktif sınıfını kaldır
        document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));
  
        // Tıklanan menü öğesinin datasına göre ilgili bölümü bul ve göster
        const targetId = link.getAttribute("data-section");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
  
        // Tıklanan menü öğesini aktif yap
        link.parentElement.classList.add("active");
      });
    });
  });