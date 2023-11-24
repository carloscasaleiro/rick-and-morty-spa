export function getParameters() {
  return window.location.hash.split("?")[1];
}

export function getPath() {
  const hash = window.location.hash;
  const slashIndex = hash.lastIndexOf("/");
  return hash.slice(slashIndex + 1);
}

export function goTo(path) {
  window.location = path;
}

export function hasParameter(parameter) {
  return window.location.hash.includes(`?${parameter}`);
}
