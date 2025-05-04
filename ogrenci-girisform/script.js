document.getElementById('stajTarihForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const baslangic = document.getElementById('baslangic').value;
    const bitis = document.getElementById('bitis').value;
    alert(`Staj Tarihleri Kaydedildi: ${baslangic} - ${bitis}`);
  });
  
  document.getElementById('gunlukForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tarih = document.getElementById('gunlukTarih').value;
    const icerik = CKEDITOR.instances.gunlukIcerik.getData();
  
    if (!tarih || !icerik) return;
  
    let gunlukler = JSON.parse(localStorage.getItem('gunlukler')) || [];
  
    gunlukler.push({ tarih, icerik });
  
    localStorage.setItem('gunlukler', JSON.stringify(gunlukler));
    listeleGunlukler();
    this.reset();
    CKEDITOR.instances.gunlukIcerik.setData('');
  });
  
  function listeleGunlukler() {
    const gunlukListesi = document.getElementById('gunlukListesi');
    gunlukListesi.innerHTML = '';
  
    let gunlukler = JSON.parse(localStorage.getItem('gunlukler')) || [];
  
    gunlukler.forEach((g, index) => {
      const div = document.createElement('div');
      div.className = 'gunluk-card';
      div.innerHTML = `
        <strong>${g.tarih}</strong><br><hr>
        ${g.icerik}
        <br>
        <button onclick="duzenleGunluk(${index})">Güncelle</button>
      `;
      gunlukListesi.appendChild(div);
    });
  }
  
  function duzenleGunluk(index) {
    let gunlukler = JSON.parse(localStorage.getItem('gunlukler'));
  
    const secilenGunluk = gunlukler[index];
  
    document.getElementById('gunlukTarih').value = secilenGunluk.tarih;
    CKEDITOR.instances.gunlukIcerik.setData(secilenGunluk.icerik);
  
    gunlukler.splice(index, 1);
    localStorage.setItem('gunlukler', JSON.stringify(gunlukler));
    listeleGunlukler();
  }
  
  // Sayfa yüklenince kayıtlı günlükleri göster
  listeleGunlukler();
  