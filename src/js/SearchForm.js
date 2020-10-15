import { Button } from './Button';

const SearchForm = (targetedElement) => {
  const target = document.querySelector(targetedElement);
  let searchedGame = '';

  target.innerHTML = `
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search for a game" aria-label="Search">
      ${Button("Search", "btn btn-outline-danger my-2 my-sm-0", '')}
    </form>
  `;

  const a = document.querySelector("form > a");
  const input = document.querySelector("form > input");
  a.addEventListener("click", handleClick);

  function handleClick(e) {
    e.preventDefault();
    window.location.hash = "#pagelist/" + input.value;
  };
};

export { SearchForm };
