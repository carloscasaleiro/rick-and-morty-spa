import { getCharacter } from "../service/api.js";
import { getPath } from "../navigation.js";
import { showCharacterDetails } from "../view/characterDetails.js";
import { showError } from "../view/error.js";

export async function characterDetails() {
  try {
    const data = await getCharacter(getPath());
    showCharacterDetails(data);
  } catch (error) {
    showError(error.message);
  }
}
