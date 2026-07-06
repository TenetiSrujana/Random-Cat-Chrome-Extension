async function replaceImage(img) {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  img.src = data[0].url;
}

document.querySelectorAll("img").forEach(replaceImage);