function goToPage() {
  window.location.href = "homePage.html";
}

window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('loggedInUsername');
  if (username) {
    document.getElementById('username').textContent = username;
  } else {
    window.location.href = 'login.html';
  }
});
const myDiv=document.getElementById('addcard');
function addCard() {
myDiv.classList.toggle('show');
myDiv.classList.remove("hidden");
}
  window.addEventListener('DOMContentLoaded', () => {
      const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
      savedCards.forEach(renderCard);
    });

function save(){
  
      const cardData = {
        title: 'New Card',
        image: 'images/card.jpg'
      };

      const cards = JSON.parse(localStorage.getItem('cards')) || [];
      cards.push(cardData);
      localStorage.setItem('cards', JSON.stringify(cards));

      renderCard(cardData);

      // إخفاء myDiv بعد الإضافة (حسب ما كنت عامل)
      const myDiv = document.getElementById('addcard');
      myDiv.classList.toggle('hidden');
      myDiv.classList.remove('show');
    }

    // دالة لإظهار الكارد على الشاشة
    function renderCard(cardData) {
      const container = document.querySelector('.container');
      const newCard = document.createElement('div');
      newCard.className = 'card';

      newCard.innerHTML = `
        <div class="image"><img src="${cardData.image}" alt="" loading="lazy"></div>
        <h2>${cardData.title}</h2>
        <ul>
          <li><a href="#">subscriptions</a></li>
          <li><a href="#">dashboard</a></li>
          <li><a href="#">details</a></li>
        </ul>
      `;

      container.appendChild(newCard);
    }
