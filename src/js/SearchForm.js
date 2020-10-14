import { Button } from './Button';

const SearchForm = (targetedElement) => {
  const target = document.querySelector(targetedElement);
  let searchedGame = '';

  target.innerHTML = `
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search for a game" aria-label="Search">
      ${Button("Search", "btn btn-outline-success my-2 my-sm-0", '#pagelist/', "submit")}
    </form>
  `;

  const a = document.querySelector("form > a");
  const input = document.querySelector("form > input");
  a.addEventListener("click", handleFormSubmit);
  input.addEventListener("keydown", handleInput);

  function handleFormSubmit(e) {
    //e.preventDefault();
    console.log(e);
    console.log(input.value);
    console.log(window.location);
    //searchedGame = '';
  };

  function handleInput(e) {

    searchedGame += e.key;
    console.log(document.querySelector("form > a").href = "#pagelist/" + searchedGame);
    //console.log(searchedGame);
  };
};

export { SearchForm };
