'use strict';


//----------------DOM ELEMENTS-------------------
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const features = document.getElementById('features--1');
const mealsRow1 = document.getElementById('meals-row--1');
const mealsRow2 = document.getElementById('meals-row--2');
const steps = document.querySelector('.steps-box');
const cities = document.querySelector('.cities-row');
const premiumPlan = document.querySelector('.premium');
const animatedElements = [features, mealsRow1, mealsRow2, steps, cities];


//----------------STICKY NAVIGATION-------------------

//Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;
// const cookieHeight = cookieMessage.getBoundingClientRect().height;

//Gets called everytime the observed object (header)
//is intersecting the obsOptions.root element at the obsOptions.threshold specified
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    //If the header is not showing in the viewport, add the sticky class to the nav
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    //Remove sticky class as soon as the header shows in the viewport  
    } else {
      nav.classList.remove('sticky');
    }
  });
}

const obsOptions = {
  root: null, //if null => root: the whole viewport
  threshold: 0, //0%
  rootMargin: `${-navHeight - 10}px`//the height of the nav = 90px (whenever there is only 90px remaining, before the header disappears from the viewport, the nav automatically becomes sticky and covers that blank space)
}

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(header);




//----------------SCROLL TO ANY SECTION-------------------

//1.Add event listener to common parent element
document.querySelector('.main-nav').addEventListener('click', function(e) {
  e.preventDefault();

  //2.Check if the event was triggered by the parent or the child element (by the class names)
  //No elements inside the buttons so no need to use closest()
  if (e.target.classList.contains('nav__link')) {
    //3. Determine which child element started the event
    const id = e.target.getAttribute('href');
    const section = document.querySelector(`${id}`);
    section.scrollIntoView({behavior: 'smooth'});
  }
});



//----------------REVEAL SECTIONS ON SCROLL-------------------

//Hide elements before triggering their animations
animatedElements.forEach(element => element.classList.add('hidden'));


const featuresWaypoint = new Waypoint({
  element: features,
  handler: function(direction) {
    // this.element.classList.remove('hidden');
    this.element.classList.add('animate__animated', 'animate__backInUp');
  },
  offset: '75%'
})


//Meals section animation
const mealsWaypoint = new Waypoint({
  element: mealsRow1,
  handler: function() {
    this.element.classList.remove('hidden');
    this.element.classList.add('animate__animated', 'animate__fadeInLeft');
    mealsRow2.classList.remove('hidden');
    mealsRow2.classList.add('animate__animated', 'animate__fadeInRight')
  },
  offset: '75%'
});


//Steps section animation
const stepsWaypoint = new Waypoint({
  element: steps,
  handler: function() {
    this.element.classList.remove('hidden');
    this.element.classList.add('animate__animated', 'animate__fadeInUp');
  },
  offset: '75%'
});


//Cities section animation
const citiesWaypoint = new Waypoint({
  element: cities,
  handler: function() {
    this.element.classList.remove('hidden');
    this.element.classList.add('animate__animated', 'animate__fadeIn');
  },
  offset: '60%'
});


//Plans section animation
const premiumWaypoint = new Waypoint({
  element: premiumPlan,
  handler: function() {
    this.element.classList.remove('hidden');
    this.element.classList.add('animate__animated', 'animate__bounce');
  },
  offset: '50%'
});



//----------------LEAFLET.JS MAP-------------------
const coordinatesView = [48.75744276680307, 25.941039555340756];
let zoom = 4.5;
const map = L.map('map', {minZoom: 3}).setView(coordinatesView, zoom);


//Map style(the tile layer)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


//Class to build new markers
class Marker {
  constructor(latitude, longitude, popupMessage, popupImage) {
    this.coordinates = [latitude, longitude];
    this.popupMessage = popupMessage;
    this.popupImage = popupImage;

    //Add market to the L (leaflet) object with the values passed in the constructor
    L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(L.popup({
                minWidth:100,
                minHeight:100,
                autoClose: false,
                className: 'leaflet-popup'
            }))
            .setPopupContent(`
            <div style="text-align:center">
                <img style  src=${this.popupImage}></img>
            </div> `)
            .openPopup();
  }
}

//Markers on the map for all 4 cities
const markerLondon = new Marker(51.498348717745834, -0.14022749093375764, 'Omnifood London', "/london.jpg");
const markerRome = new Marker(41.906025696107086, 12.45999457597215, 'Omnifood Rome', "/rome.jpg");
const markerBerlin = new Marker(52.51113649167234, 13.387582290054013, 'Omnifood Berlin', "/berlin.jpg");
const markerParis = new Marker(48.856998922645765, 2.292056960898533, 'Omnifood Paris', "/paris.jpg");



//----------------MOBILE NAV-------------------
$('.js--nav-icon').click(function() {
  let nav = $('.js--main-nav');
  let icon = $('.js--nav-icon');
  nav.slideToggle(500);

  if (icon.attr('name') === 'menu') {
    icon.attr('name','close');
  } else {
    icon.attr('name','menu');
  }
  
});


//----------------FOOTER YEAR-------------------
let currentYear = new Date().getFullYear();
const footerCopyright = document.querySelector('.footer__copyright');
footerCopyright.textContent = `\u00A9 Copyright ${currentYear} by Omnifood. All rights reserved.`
