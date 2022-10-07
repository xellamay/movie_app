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
    const previewSrc = node.querySelector(".movie__img").src.slice(21);
    const titleText = node.querySelector(".movie__title").innerText;
    const descriptionText = node.querySelector(".overview__description").innerText;
    const rating = node.querySelector(".movie__rating").innerText;
    
    data.push({
      id: uuid(),
      title: titleText,
      description: descriptionText,
      rating: Number(rating),
      preview: previewSrc
    })
  })

  return data;
}

function filterCardsBySearch(query) {
  return movieData.filter((movie) => movie.title.toLowerCase().includes(query))
}


// НАРАБОТКИ ПО ОТРИСОВКЕ

// renderCardsNodes();

// const data = [
//   {
//       "id": "d5b54826-14cb-48e7-8266-bc60f6fa4726",
//       "title": "Orphan: First Kill",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 5,
//       "preview": "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.6a3ba28b.jpg"
//   },
//   {
//       "id": "2f6df744-2321-4745-8534-c013ab6c4ae4",
//       "title": "Bullet Train",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 7,
//       "preview": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.edbe298e.jpg"
//   },
//   {
//       "id": "944fb6a7-be96-4a36-a7a3-4bc4a60b0ac8",
//       "title": "Fall",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 7.6,
//       "preview": "/spCAxD99U1A6jsiePFoqdEcY0dG.ce6b82ae.jpg"
//   },
//   {
//       "id": "5f4b11fe-b90e-447f-9bc0-0d76ac63a6b9",
//       "title": "Pinocchio",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 8.2,
//       "preview": "/g8sclIV4gj1TZqUpnL82hKOTK3B.4c399f0a.jpg"
//   },
//   {
//       "id": "216569d0-35c7-46dd-974e-2d683c294fde",
//       "title": "After ever happy",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 7.2,
//       "preview": "/6b7swg6DLqXCO3XUsMnv6RwDMW2.45e36c95.jpg"
//   },
//   {
//       "id": "49c8aaf9-14c7-4436-9ad5-8efd65a7dce2",
//       "title": "Beast",
//       "description": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
//       "rating": 7,
//       "preview": "/xIGr7UHsKf0URWmyyd5qFMAq4d8.504d4715.jpg"
//   }
// ];

// function renderCardsNodes() {
//   const rootNode = document.createElement("section")
//   rootNode.className = "movies";
//   document.body.appendChild(rootNode);


//   data.forEach((movie) => {
//     const node = document.createElement("article");
//     node.className = "movie__card";

//     node.innerHTML = `
//       <img src="${movie.preview}" alt="#" class="movie__img">
//       <div class="movie__info">
//         <h2 class="movie__title">${movie.title}</h2>
//         <span class="movie__rating">${movie.rating}</span>
//       </div>
//       <header class="movie__overview">
//         <h2 class="overview__title">Overview</h2>
//         <p class="overview__description">${movie.description}</p>
//       </header>
//     `

//     rootNode.appendChild(node);
//   })
// }
