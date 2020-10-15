import { Button } from './Button';
import { Modal } from './Modal';

const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, background_image, developers, platforms, publishers, genres, tags } = response;

          let articleDOM = document.querySelector(".page-detail .article");
          articleDOM.innerHTML = `
            <div class='cardGame-imgContainer'>
              <img class="w-100" src=${background_image}>
            </div>
            <div class="container">
              <h1 class="mt-3">${name}</h1>
              <p>${description}</p>
              <div class="d-flex justify-content-between flex-wrap">
                <p class="w-25"><strong>Release date</strong><br/>${released}</p>
                <p id="developer" class="w-25"><strong>Developer</strong><br/>${Button(developers[0].name, 'text-danger')}</p>
                <p class="w-25"><strong>Plateforms</strong><br/>${platforms.map((plateform) => ` ${plateform.platform.name}`)}</p>
                <p class="w-25"><strong>Publisher</strong><br/>${publishers[0].name}</p>
              </div>
              <div class="d-flex justify-content-between flex-wrap">
              <p id="genres" class="w-50"><strong>Genre</strong><br/>${genres.map((genre) => ` ${Button(genre.name, 'text-danger', `#pagelist/${genre.name}`)}`)}</p>
              <p id="tags" class="w-50"><strong>Tags</strong><br/>${tags.map((tag) => ` ${tag.name}`)}</p>
              </div>
            </div>
          `;
          addEventListenerToLinks(response);
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  function addEventListenerToLinks(response) {
    let developerLink = document.getElementById("developer");
    let genreLinks = document.querySelectorAll("#genres > a");
    let tagLinks = document.querySelectorAll("#tags > a");

    developerLink.addEventListener("click", handleDeveloperClick);
    console.log(developerLink);
    genreLinks.forEach((link) => {
      console.log(link);
      link.addEventListener("click", handleGenreClick.bind())
    });

    function handleDeveloperClick(e) {
      e.preventDefault();
      Modal(response);
    };
  };

  function handleGenreClick(e) {
    e.preventDefault();
    console.log(e.srcElement.innerHTML);
  }

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
