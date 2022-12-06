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
const header = document.querySelector('header');
const btnsContainer = document.querySelector('main .buttons');
const btnPreviousElement = document.querySelector('main .button.previous');
const btnNextElement = document.querySelector('main .button.next');
const carouselImageElement = document.querySelector('main .carousel-image');






/*----------------------------------------------------------------------
CODICE PRINCIPALE*/

// * CODICE LINEARE
images.forEach((image , index) => {
   let carouselItemElement = getAnElementWithClasses('div','my_carousel-item');

   if(index === 0){
      carouselItemElement.classList.add('active');
   }

   const carouselItemElementImg = getAnImgWithClasses('img','my_img',image['image']); 

   carouselItemElementImg.append(header)
})










/*----------------------------------------------------------------------
FUNZIONI*/
// * FUNZIONE PER CREARE UN ELEMENTO HTML CON UNA O PIU' CLASSI
function getAnElementWithClasses(element , elementClasses){
   let htmlElement = document.createElement('element');

   htmlElement.className = elementClasses;

   return htmlElement;
}



// * FUNZIONE PER CREARE UN IMAMGINE HTML CON UNA O PIU' CLASSI
function getAnImgWithClasses(element , elementClasses , src , alt , title){
   let img = getAnElementWithClasses(element , elementClasses);
   img.src = `${src}`;
   img.alt = {alt};
   img.title = title;
}