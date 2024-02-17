const contentContainer = document.getElementById("content");
const imageContainer = document.getElementById("image-container");
const mainContainer = document.querySelector(".main");

let jsonData;

function displayInterface() {
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = jsonData.text_title;

  contentContainer.appendChild(heading);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = jsonData.text_summary;

  contentContainer.appendChild(description);

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Shop Now >";

  contentContainer.appendChild(button);

  const image = document.createElement("img");
  image.src = jsonData.image1;
  image.classList.add("image");

  imageContainer.appendChild(image);

  const image1 = document.createElement("img");
  image1.src = jsonData.image2;
  image1.classList.add("small-img", "img-1");

  mainContainer.appendChild(image1);

  const image2 = document.createElement("img");
  image2.src = jsonData.image3;
  image2.classList.add("small-img", "img-2");

  mainContainer.appendChild(image2);

  const image3 = document.createElement("img");
  image3.src = jsonData.image4;
  image3.classList.add("small-img", "img-3");

  mainContainer.appendChild(image3);

  const image4 = document.createElement("img");
  image4.src = jsonData.image5;
  image4.classList.add("small-img", "img-4");

  mainContainer.appendChild(image4);
}

const fetchData = async () => {
  const res = await fetch("https://dogs-care.onrender.com/api/dogs_care");
  const data = await res.json();

  jsonData = data[0];
  displayInterface();
};

fetchData();
