/*----------------------------------------------------------------------
DICHIARAZIONI E INIZIALIZZAZIONI GENERALI*/

// * INIZIALIZZAZIONI

// ? ARRAY E OGGETTI DI PARTENZA
const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },

   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },

   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },

   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },

   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


// ? PRELIEVO DAL DOM INIZIALE
const btnsContainer = document.querySelector('main .buttons');
const btnPreviousElement = document.querySelector('main .button.previous');
const btnNextElement = document.querySelector('main .button.next');
const carouselImageElement = document.querySelector('main .carousel-image');
const carouselThumbnailsContainer = document.querySelector('main .carousel-thumbnails-container');


// ? VARIABILI
let current = 0;






/*----------------------------------------------------------------------
CODICE PRINCIPALE*/

// * CODICE LINEARE
images.forEach((img , index) => {
   const carouselItem = getAnElementWithClasses('div','my_carousel-item');

   if(index === 0){
      carouselItem.classList.add('active');
   }

   carouselItem.innerHTML = `
      <img src='${img['image']}'></img>
      <h3 class='fw-bold'>${img['title']}</h3>
      <span>${img['text']}</span>
   `;

   carouselImageElement.append(carouselItem);
})

const carouselItems = document.querySelectorAll('.my_carousel-item');

let myInterval = setInterval(()=>{
   current = increaseCurrentCarouselItem(carouselItems , current);
},3000)


// * EVENTI
btnPreviousElement.addEventListener('click',()=>{
   current = decreaseCurrentCarouselItem(carouselItems,current);
})

btnNextElement.addEventListener('click',()=>{
   current = increaseCurrentCarouselItem(carouselItems,current);
})








/*----------------------------------------------------------------------
FUNZIONI*/
// * FUNZIONE PER CREARE UN ELEMENTO HTML CON UNA O PIU' CLASSI
function getAnElementWithClasses(element , elementClasses){
   let htmlElement = document.createElement(element);

   htmlElement.className = elementClasses;

   return htmlElement;
}



// * FUNZIONE PER CREARE UN IMAMGINE HTML CON UNA O PIU' CLASSI
function getAnImgWithClasses(imgClasses , src , alt , title){
   let img = getAnElementWithClasses('img' , imgClasses);
   img.src = `${src}`;
   img.alt = {alt};
   img.title = title;
}



// * FUNZIONE PER ANDARE AVANTI DI UN ELEMENTO DI UN CAROSELLO
function increaseCurrentCarouselItem(carouselItemsList , currentNumber){
   carouselItemsList[currentNumber].classList.remove('active');

   currentNumber++;

   
   if(currentNumber > carouselItemsList.length-1){
      currentNumber = 0;
   }

   carouselItemsList[currentNumber].classList.add('active');
   return currentNumber;
}



// * FUNZIONE PER ANDARE INDIETRO DI UN ELEMENTO DI UN CAROSELLO
function decreaseCurrentCarouselItem(carouselItemsList , currentNumber){
   carouselItemsList[currentNumber].classList.remove('active');

   currentNumber--;

   
   if(currentNumber < 0){
      currentNumber = carouselItemsList.length-1;
   }

   carouselItemsList[currentNumber].classList.add('active');
   return currentNumber;
}