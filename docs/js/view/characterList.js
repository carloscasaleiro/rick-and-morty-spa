import { background } from "./components/background.js";
import { banner } from "./components/banner.js";
import { navbar } from "./components/navbar.js";
import { goBack } from "./components/goBack.js";
import { hasParameter } from "../navigation.js";
import { characters } from "../routes.js";
import { cards } from "./components/card.js";

export function showCharacterList(data) {
  $("#container")
    .empty()
    .append(background)
    .append(banner)
    .append(navbar(data));

  if (hasParameter("name")) {
    $("#container").append(goBack("reset", "Clear Search", characters.hash));
  }

  $("#container").append(cards(data));
}
