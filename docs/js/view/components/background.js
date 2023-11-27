export function background() {
  let random = Math.ceil(Math.random() * 6);

  const imageUrl = `./resources/background/background${random}.jpg`;

  $('body').css({
    'background-image': `url('${imageUrl}')`,
    'background-size': 'cover'
  });
}
