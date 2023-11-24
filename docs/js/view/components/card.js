import { details } from "../../routes.js";

const footer = (name) => $("<h1>").text(name).addClass("name");
const image = ({ src, alt }) =>
  $("<img>").attr({ src, alt }).addClass("characterImage");

const card = (results) =>
  $("<div>")
    .append(
      $("<a>")
        .attr({ href: `${details.hash}/${results.id}` })
        .append(image({ src: results.image, alt: results.name }))
        .append(footer(results.name))
        .addClass("anchor")
    )
    .addClass("card");

export function cards(data) {

  const charactersDiv = $("<div>")
    .addClass("charactersDiv")
    .append(data.results.map(card));

  return charactersDiv;
}

export function singleCard(data) {

  const charactersDiv = $("<div>")
    .addClass("charactersDiv")
    .append(card(data));

  return charactersDiv;
}
