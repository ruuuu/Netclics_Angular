const cardWrapper = document.querySelector('.content__cards');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');




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
    title: 'Интерстеллар',
    original: 'Интерстеллар',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 2, 
    title: 'Побег из Шоушенка',
    original: 'Побег из Шоушенка',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 3, 
    title: 'Джентльмены',
    original: 'Джентльмены',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 4, 
    title: 'Остров проклятых',
    original: 'Остров проклятых',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },
  {
    id: 5, 
    title: 'Зеленая миля',
    original: 'Зеленая миля',
    category: 'Фантастика, приключения',
    rating: 7.9,
    img: './images/film.png',
    link: './film.html'
  },

];



const render = (array) => {

  cardWrapper.innerHTML = '';

  array.forEach((film) => {
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
};



searchBtn.addEventListener('click', () => {
  //sortFilms = films.filter((film) => film.title.includes(searchInput.value));
  sortFilms = films.filter((film) => {
    return film.title.includes(searchInput.value)
  });
  console.log('sortFilms', sortFilms)
  render(sortFilms);
});



render(films);
