//import { PageDetail } from './PageDetail';
import { routes } from "./routes";
import { SearchForm } from "./SearchForm";
import "../sass/styles.scss";
import 'bootstrap';

let pageArgument;

const setRoute = (pageArgument = "") => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");

  SearchForm("nav div:last-child");

  routes[path[0]](pageArgument);

  console.log(path[0]);
  console.log(pageArgument);
  console.log(pageContent);
  console.log(routes);
  return true;
};

console.log(pageArgument);
window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
