import { background } from "./components/background.js";
import { banner } from "./components/banner.js";
import { goBack } from "./components/goBack.js";
import { characters } from "../routes.js";

export function showError(message) {

  window.scrollTo(0,0);
  
  $("#container")
    .empty()
    .append(background)
    .append(banner)
    .append($("<h1>").text(message).addClass("error"))
    .append(goBack("goBack", "Back to list", characters.hash));
}
