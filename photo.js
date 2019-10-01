// Photo Selectors
const baseURL2 = "https://pixabay.com/api/?key=13799332-3f90039e97dccd582e335c8f6&q="
const buttonNew = document.querySelector(".button-new");
const searchNew = document.querySelector(".input-new");
const photoOutput = document.querySelector(".portfolio")

// Pixabay API
// API Key = 13799332-3f90039e97dccd582e335c8f6
let photoList = (photo) => {
  photoOutput.innerHTML = ``;
  for (let i = 0; i < 20; i++) {
    let photoImage = document.createElement('img')
    photoImage.src = `${photo[i].largeImageURL}`;

    let photoSection = document.createElement('div');
    let userHeading = document.createElement('h2')
    userHeading.textContent = `Photographer: ${photo[i].user}`
    let photoURLCreate = document.createElement("a");
    photoURLCreate.href = `${photo[i].pageURL}`;
    photoURLCreate.target = `_blank`;
    photoURLCreate.textContent = `Visit Site`;

    photoSection.append(userHeading);
    photoSection.append(photoImage);
    photoSection.append(photoURLCreate);
    photoOutput.append(photoSection);
  }
};

buttonNew.addEventListener('click', async () => {
  let responseNew = await axios.get(`${baseURL2}${searchNew.value}&image_type=photo`);
  photoList(responseNew.data.hits)
});