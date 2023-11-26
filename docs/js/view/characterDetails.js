import { background } from "./components/background.js";
import { banner } from "./components/banner.js";
import { goBack } from "./components/goBack.js";
import { characters } from "../routes.js";
import { singleCard } from "./components/card.js";

const paragraph = (content) => $("<p>").text(content).addClass("detail");

const fields = ({ species, status, origin, location }) =>
  $("<div>")
    .addClass("details")
    .append(paragraph(`Species: ${species}`))
    .append(paragraph(`Status: ${status}`))
    .append(paragraph(`From: ${origin.name}`))
    .append(paragraph(`Last seen on: ${location.name}`))
    .append(goBack("detailsGoBack", "Back to list", characters.hash));

export function showCharacterDetails(data) {

  window.scrollTo(0,0);
  
  $("#container")
    .empty()
    .append(background)
    .append(banner)
    .append(
      $("<div>")
        .append(singleCard(data))
        .append(fields(data))
        .addClass("singleCharDiv")
    );
}
