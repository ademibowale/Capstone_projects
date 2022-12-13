const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('#close');
menu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});

closeMenu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});

const guest = [
  {
    name: 'JASON ILEY',
    about: 'Chairman and CEO Of Sony Record   Jason Iley MBE was appointed Chairman and CEO of Sony Music UK and Ireland in 2014. Since then he has transformed Sony Music\'\s roster.',
    image: './images/Sony_record.jpeg',
    display: 'block',
  }, 
  {
    name: 'KENNIS OGUNGBE',
    about: 'Chairman and CEO Of Kennis Music. A great man in the African Afrobeat Music industry, He has produced a lot of artist both home and abroad',
    image: './images/Kenis.jpg',
    display: 'hs hide-speaker',
  }, 
  {
    name: 'BEYONCE',
    about: 'Musician. She is the most-nominated and -awarded woman in Grammys history. Of her 79 nominations, Beyoncé has won 28 awards.',
    image: './images/Beyonsee_im.png',
    display: 'hs hide-speaker',
  },

  {
    name: 'HYCROWN',
    about: 'CEO HYMUSIC, with a great features, he has feature alot of artist in his music both home and abroad and has won alot of award in his name to his brand',
    image: './images/hycrown_im.jpg',
    display: 'hs hide-speaker',
  },

  {
    name: 'R-KELLY',
    about: 'One of the most popular artists during a period lasting from the early 90s into the mid-2010s, contemporary R&B singer, songwriter, and producer.',
    image: './images/Rkelly.jpg',
    display: 'hs hide-speaker',
  },

  {
    name: 'LADY-GAGA',
    about: 'MUSICIAN One of the america female singer she has been doing great in america music industry. She has a great vocals that moves alot of audience in the music industry',
    image: './images/Lady_Gaga.jpeg',
    display: 'hs hide-speaker',
  },
];

function createSpeakers(prop) {
  const subject = document.querySelector('#col-d');
  subject.insertAdjacentHTML('beforeend',
    `<div id="speaker" class="${prop.display}">
     <div><img src="${prop.image}" alt="speakers"></div>

    <div>
    <h3>${prop.name}</h3>
    <hr>
    <p>${prop.about}</p>
    </div>
    </div>`);
}

for (let i = 0; i < guest.length; i += 1) {
  createSpeakers(guest[i]);
}

const btn = document.querySelector('.btn-more');
btn.addEventListener('click', () => {
  btn.classList.toggle('show');
  /* eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }] */
  btn.classList.contains('show') ? btn.innerHTML = 'Hide <i class="bi bi-chevron-up"></i>' : btn.innerHTML = 'MORE <i class="bi bi-chevron-down"></i>';
  document.querySelectorAll('.hs').forEach((elem) => {
    elem.classList.toggle('hide-speaker');
  });
});

let slideIndex = 0;
function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();