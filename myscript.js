const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imagesList=['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const containerCarousel= document.querySelector('div#containercarousel');

for(i=0; i<images.length; i++){
    containerCarousel.innerHTML += `<div class="carouselitem active"> <img src="img/${imagesList[i]}" alt=""> </div>`;
    
}

let item=document.querySelectorAll('carouselitem');
const prevButton=document.querySelector('div.beforebutton');
const nextButton=document.querySelector('div.nextbutton');

prevButton.addEventListener('click', function(){
    let activeIndex= 4;
    activeIndex=activeIndex-1;
    document.querySelector('div.carouselitem.active').classList.remove('active');
    document.querySelectorAll('div.carouselitem').classList.add('active');

})
