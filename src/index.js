const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      // if(card.classList.contains('reserved')){
      //  memoryGame.pickedCards.push(card);
      // }
      // else{
      //   card.classList.toggle('turned');
      // }

      if(memoryGame.pickedCards.length < 2)
      {
        memoryGame.pickedCards.push(card);
        card.classList.add('turned')
      }
      //const turnCards = document.querySelectorAll(".card.turned");
      const turnCards = memoryGame.pickedCards;
      if (turnCards.length === 2) {
        const card1 = turnCards[0]
        const card2 = turnCards[1]
        const card1Name = card1.getAttribute('data-card-name')
        const card2Name = card2.getAttribute('data-card-name')
        const result = memoryGame.checkIfPair(card1Name, card2Name);
        if (result) {
          turnCards[0].classList.add("blocked");
          turnCards[1].classList.add("blocked");
          memoryGame.pickedCards = [];
        } else {
          setTimeout(() => {
            turnCards[0].classList.toggle("turned");
            turnCards[1].classList.toggle("turned");
            memoryGame.pickedCards = [];
          }, 1000);
        }
      } 
     
      
    });
  });
});

// check if the cards are flipped ?
// const turnCards = document.querySelectorAll('.card.turned')
// if (turnCards.length === 2){

// const result = memoryGame.checkIfPair(turnCards[0], turnCards[1])
// if(result)
// {
//   turnCards[0].classList.add('reserved');
//   turnCards[1].classList.add('reserved');
// }
// else{
//   setTimeout(()=>{
//     turnCards[0].classList.toggle('turned');
//     turnCards[1].classList.toggle('turned');
//   },1000)
// }
// } 

// check if the cards match ?
// if(memoryGame.checkIfPair(card1, card2)){

//   turnCards.forEach((card) => card.classList.toggle('front'))
// } else {
//   turnCards.forEach((card) => card.classList.remove('turned'))
// }