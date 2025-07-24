const cardWrapper = document.querySelector('.content__cards');

const films = [
  {
    id: 0, 
    title: 'Марсианин 1',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 1, 
    title: 'Марсианин2',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 2, 
    title: 'Марсианин3',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 3, 
    title: 'Марсианин4',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 4, 
    title: 'Марсианин5',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 5, 
    title: 'Марсианин6',
    original: 'Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },

];



const render = () => {

  cardWrapper.innerHTML = '';

  films.forEach((film) => {
    cardWrapper.insertAdjacentHTML('beforeend', `
      <li class="content__cards-item">
       <a href="${film.link}"> 
          <div class="content__cards-item-img">
            <img src="${film.img}" alt="${film.title}">
          </div>
          <div class="content__cards-item-title">
            <h5>${film.title}</h5>
            <span>${film.original}</span>
          </div>
          <p class="content__cards-item-description">${film.category}</p>
          <p class="content__cards-item-rating">${film.rating}</p>
        </a>
      </li>
    `) ;
  })
}



render();
