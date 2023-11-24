export function banner() {
  const imageSrc = "./../resources/banner.jpeg";
  const banner = $("<img>").attr({ src: imageSrc, id: "banner" });

  return banner;
}