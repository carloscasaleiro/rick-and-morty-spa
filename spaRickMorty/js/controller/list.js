import { getCharacterList } from "../service/api.js";
import { getParameters } from "../navigation.js";
import { showCharacterList } from "../view/characterList.js";
import { showError } from "../view/error.js";

export async function characterList() {
  try {
    const data = await getCharacterList(getParameters());
    showCharacterList(data);
  } catch (error) {
    showError("There is nothing here");
  }
}
