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
   const carouselThumbnail = getAnElementWithClasses('div','carousel-thumbnails active');

   if(index === 0){
      carouselItem.classList.add('active');
      carouselThumbnail.classList.remove('active');
   }


   carouselItem.innerHTML = `
      <img src='${img['image']}'></img>
      <h3 class='fw-bold'>${img['title']}</h3>
      <span>${img['text']}</span>
   `;

   carouselThumbnail.innerHTML = `
      <img src='${img['image']}'></img>
   `;


   carouselImageElement.append(carouselItem);
   carouselThumbnailsContainer.append(carouselThumbnail);
})

const carouselItems = document.querySelectorAll('.my_carousel-item');
const carouselThumbnails = document.querySelectorAll('.carousel-thumbnails');

carouselThumbnails.forEach((carouselThumbnail,index)=>{
   carouselThumbnail.addEventListener('click', ()=>{
      carouselItems[current].classList.remove('active');
      carouselThumbnails[current].classList.add('active');
      current = index;
      console.log(current);
      carouselItems[current].classList.add('active');
      carouselThumbnails[current].classList.remove('active');
   })
})

let myInterval = setInterval(()=>{
   current = increaseCurrentCarouselItem(carouselItems , current , carouselThumbnails);
},3000)



// * EVENTI

// ? Click al bottone per tornare indietro di un elemento del carosello
btnPreviousElement.addEventListener('click',()=>{
   current = decreaseCurrentCarouselItem(carouselItems,current ,carouselThumbnails);
})


// ? Click al bottone per andare avanti di un elemento del carosello
btnNextElement.addEventListener('click',()=>{
   current = increaseCurrentCarouselItem(carouselItems,current,carouselThumbnails);
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
function increaseCurrentCarouselItem(items , currentNumber , thumbnails){
   items[currentNumber].classList.remove('active');
   thumbnails[currentNumber].classList.add('active');

   currentNumber++;

   
   if(currentNumber > items.length-1){
      currentNumber = 0;
   }

   items[currentNumber].classList.add('active');
   thumbnails[currentNumber].classList.remove('active');
   return currentNumber;
}



// * FUNZIONE PER ANDARE INDIETRO DI UN ELEMENTO DI UN CAROSELLO
function decreaseCurrentCarouselItem(items , currentNumber , thumbnails){
   items[currentNumber].classList.remove('active');
   thumbnails[currentNumber].classList.add('active');

   currentNumber--;

   
   if(currentNumber < 0){
      currentNumber = items.length-1;
   }

   items[currentNumber].classList.add('active');
   thumbnails[currentNumber].classList.remove('active');
   return currentNumber;
}