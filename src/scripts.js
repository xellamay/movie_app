import { v4 as uuid } from 'uuid';

const inputSearch = document.querySelector(".js-search-input");
const movieCards = document.querySelectorAll(".movie__card");

const movieData = getMovieData();

inputSearch.addEventListener("input", (e) => {
  console.log(filterCardsBySearch(e.target.value))
})

function getMovieData() {
  // Array<{ id: uuid; title: string }>
  const data = [];

  Array.from(movieCards).forEach((node) => {
    const titleText = node.querySelector(".movie__title").innerText;
    const descriptionText = node.querySelector(".overview__description").innerText;
    const rating = node.querySelector(".movie__rating").innerText;
    
    data.push({
      id: uuid(),
      title: titleText,
      description: descriptionText,
      rating: Number(rating),
    })
  })

  return data;
}

function filterCardsBySearch(query) {
  return movieData.filter((movie) => movie.title.toLowerCase().includes(query))
  
}
