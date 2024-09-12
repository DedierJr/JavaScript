const autocompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}"></img>
      <h3>${movie.Title}</h3>
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "3eea043b",
        s: searchTerm,
      },
    });

    if (response.data.Error) return [];

    return response.data.Search;
  },
};

createAutocomplete({
  ...autocompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});

createAutocomplete({
  ...autocompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryTarget, side) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "3eea043b",
      i: movie.imdbID,
    },
  });
  summaryTarget.innerHTML = movieTemplate(response.data);

  if (side === "left") leftMovie = response.data;
  else rightMovie = response.data;

  if (leftMovie && rightMovie) runComparison();
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);
    
    if (leftSideValue > rightSideValue) {
      rightStat.classList.remove("is-pramary");
      rightStat.classList.add("is-warning");
    } else {
      leftStat.classList.remove("is-pramary");
      leftStat.classList.add("is-warning");
    }
  });
};

const movieTemplate = (movieDetail) => {
  const dollars = movieDetail.BoxOffice
    ? parseInt(movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, ""))
    : "N/A";
  const metascore = movieDetail.Metascore
    ? parseInt(movieDetail.Metascore)
    : "N/A";
  const imdbRating = movieDetail.imdbRating
    ? parseFloat(movieDetail.imdbRating)
    : "N/A";
  const imdbVotes = movieDetail.imdbVotes
    ? parseInt(movieDetail.imdbVotes.replace(/,/g, ""))
    : "N/A";
  const awards = movieDetail.Awards
    ? movieDetail.Awards.split(" ").reduce((prev, word) => {
        const value = parseInt(word);
        return isNaN(value) ? prev : prev + value;
      }, 0)
    : "N/A";

  return `
    <article data-value="${awards}" class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h2>${movieDetail.Title}</h2>
          <h4>${movieDetail.Genre}</h3>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article data-value=${awards} class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article data-value=${dollars} class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metascore} class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
