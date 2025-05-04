document.addEventListener('DOMContentLoaded', function() {
  const dayList = document.getElementById('dayList');
  const startDate = new Date('2025-07-01');
  const endDate = new Date('2025-08-31');

  let currentDate = startDate;
  let dayCounter = 1;

  while (currentDate <= endDate) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day-card';
    dayDiv.innerHTML = `
      <h3>Gün ${dayCounter} - ${currentDate.toLocaleDateString('tr-TR')}</h3>
      <textarea placeholder=\"Bugün neler yaptın?\"></textarea><br/>
      <input type=\"file\" /><br/>
      <button>Kaydet</button>
    `;

    dayList.appendChild(dayDiv);

    currentDate.setDate(currentDate.getDate() + 1);
    dayCounter++;
  }
});

  