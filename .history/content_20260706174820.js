const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.src = `https://cataas.com/cat?${Math.random()}`;
});