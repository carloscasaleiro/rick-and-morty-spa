const API = "https://rickandmortyapi.com/api";

export async function getCharacterList(params = "") {
  try {
    const promise = await fetch(`${API}/character?${params}`);
    const data = await promise.json();

    if (!promise.ok) {
      throw new Error(data.error || "Unknown error occurred");
    }

    const previous = data.info.prev;
    const next = data.info.next;
    const results = data.results;

    return { previous, next, results };
  } catch (error) {
    console.error(error);
  }
}

export async function getCharacter(id) {
  try {
    const promise = await fetch(`${API}/character/${id}`);
    const data = await promise.json();

    if (!promise.ok) {
      throw new Error(data.error || "Unknown error occurred");
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
