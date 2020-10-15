import { Button } from './Button';

const Home = (argument = "") => {
  let pageNumber = 1;

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                <div class="cardGame mb-3">
                  <div class="card cardGame-imgContainer">
                    <img class="card-img" src=${article.background_image} alt=${article.name}>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${article.name}</h5>
                    <p class="card-text">${article.released}</p>
                    ${Button('Read more', "btn btn-outline-primary", `#pagedetail/${article.id}`)}
                  </div>
                </div>
            `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
          addHoverToCard(response.results);
          showMoreGame();
        });
    };
    fetchList(`https://api.rawg.io/api/games?page=${pageNumber}&page_size=9&dates=2020-10-01,2020-10-15`);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { Home };
