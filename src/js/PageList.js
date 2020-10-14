import { Button } from './Button';

const PageList = (argument = "") => {
  const addHoverToCard = (articles) =>  {
    const gamesImg = document.querySelectorAll(".cardGame-imgContainer > img");
    gamesImg.forEach((img, index) => {
      img.addEventListener("mouseover", () => {
        let article = articles[index];
        console.log(article);
        img.style.opacity = 0.2;
        img.parentElement.innerHTML += `
          <div class="card-img-overlay">
            <p class="card-text">${article.released}</p>
            <p class="card-text">${article.rating}/${article.rating_top} - ${article.reviews_count} votes</p>
            <p class="card-text small">${article.tags.map((tag) => tag.name)}</p>
          </div>
        `;
        /*const imgOverlay = document.querySelector(".card-img-overlay");
        imgOverlay.addEventListener("mouseout", () => {
          imgOverlay.parentNode.removeChild(imgOverlay);
        });*/
      });
    });
  };

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
      }

      //console.log(finalURL);

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
                    <a href = "#pagedetail/${article.id}">${article.id}</a>
                    ${Button('Read more', "btn btn-primary", `#pagedetail/${article.id}`)}
                  </div>
                </div>
            `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
          addHoverToCard(response.results);
        });
    };

    fetchList("https://api.rawg.io/api/games?page_size=9", cleanedArgument);
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

export { PageList };
