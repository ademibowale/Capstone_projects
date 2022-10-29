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
    about: 'Chairman and CEO Of Sony Record   Jason Iley MBE was appointed Chairman and CEO of Sony Music UK and Ireland in 2014. Since then he has transformed Sony Music’s roster by appointing several of the industry’s leading executives to run Sony labels and divisions, He has worked with many of the most famous artists in music, including U2, Sir Paul McCartney, David Bowie, Elton John, Beyoncé, Kanye West, Alicia Keys, Calvin Harris, Rihanna, Mark Ronson and Amy Winehouse.',
    image: './images/Sony_record.jpeg',
    display: 'block',
  }, {
    name: 'KENNIS OGUNGBE',
    about: 'Chairman and CEO Of Kennis Music.',
    image: './images/Kenis.jpg',
    display: 'hs hide-speaker',
  }, {
    name: 'BEYONCE',
    about: 'Musician. She is the most-nominated and -awarded woman in Grammys history. Of her 79 nominations, Beyoncé has won 28 awards. Some of her notable wins include song of the year for her chart-topping hit "Single Ladies," best music video for "Formation," and best R&B performance for "Drunk in Love." She has been credited with revolutionizing the music industry after she released her self-titled studio album, "Beyoncé," on digital platforms without any prior warning.',
    image: './images/Beyonsee_im.png',
    display: 'hs hide-speaker',
  },

  {
    name: 'HYCROWN',
    about: 'CEO HYMUSIC',
    image: './images/hycrown_im.jpg',
    display: 'hs hide-speaker',
  },

  {
    name: 'R-KELLY',
    about: 'One of the most popular artists during a period lasting from the early 90s into the mid-2010s, contemporary R&B singer, songwriter, and producer R. Kelly picked up where new jack swing left off by developing his own mix of soul, funk, hip-hop, and gospel. Fourteen of Kellys studio albums reached in the Top Ten of the Billboard 200, " the Grammy-winning "I Believe I Can Fly," and the remixes of "Step in the Name of Love" and "Ignition." He was also behind Top Ten hits by the likes of Aaliyah and Michael Jackson. ',
    image: './images/Rkelly.jpg',
    display: 'hs hide-speaker',
  },

  {
    name: 'LADY-GAGA',
    about: 'MUSICIAN One of the america female singer she has been doing great in america music industry',
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