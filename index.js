
let z = fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
  headers: {
    "X-RapidAPI-Key": "7d82228a97msh497ba436c545bb2p1f9a04jsnf900472ca9c7",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
})
  .then((res) => res.json())
  .then((a) => {
    let main = document.getElementById("dta");
let search = document.getElementById("movie_name");




function createMovieCard(movie) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let poster = document.createElement("img");
  poster.src = movie.image;

  let title = document.createElement("h4");
  title.innerText = movie.title;

  let rating = document.createElement("p");
  rating.innerHTML = `Rating 🌟: &nbsp  ${movie.rating}/10 `;

  let year = document.createElement("p");
  year.innerHTML = `Year: ${movie.year}`;

  let genre = document.createElement("p");
  genre.innerHTML = `Genre: ${movie.genre}`;

  card.appendChild(poster);
  card.appendChild(title);

  card.addEventListener("click", function () {
    window.location.href = `movie.html?title=${movie.title}&description=${movie.description}&poster=${movie.image}&rating=${movie.rating}&year=${movie.year}&genre=${movie.genre}`;
  });

  return card;
}


a.forEach((movie) => {
  main.appendChild(createMovieCard(movie));
});




search.addEventListener("input", () => {
  let searchTerm = search.value.toLowerCase().trim();
  main.innerHTML = "";

  let resultsFound = false;

  a.forEach((movie) => {
    if (movie.title.toLowerCase().includes(searchTerm)) {
      main.appendChild(createMovieCard(movie));
      resultsFound = true;
    }
  });

  if (!resultsFound) {
    let noResultsContainer = document.createElement("h1");
    noResultsContainer.style.textAlign = "center";
    noResultsContainer.innerHTML = "No Results Found &#128565;";
    main.appendChild(noResultsContainer);
  }
});

  });

