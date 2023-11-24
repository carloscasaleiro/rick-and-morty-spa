export function background() {
  let random = Math.ceil(Math.random() * 6);

  const imageUrl = `./resources/background/background1.jpg`;

  $('body').css({
    'background-image': `url('${imageUrl}')`,
    'background-size': 'cover'
  });
}
