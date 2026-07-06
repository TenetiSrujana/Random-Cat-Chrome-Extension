async function replaceImages() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();

  document.querySelectorAll("img").forEach((img) => {
    img.src = data[0].url;
  });
}

replaceImages();