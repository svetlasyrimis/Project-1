//Text link to NewsAPI.org that reads: Powered by News API
//Photo by Lauren Mancke on Unsplash

const baseURL = "https://newsapi.org/v2/everything?q=";
const apiKey = "&sortBy=popularity&apiKey=07f3568073274011bc90905e922e120e";

const button = document.querySelector("button");
const search = document.querySelector("input");
const startDate = document.querySelector("#start");
const endDate = document.querySelector("#end");
const sectionOutput = document.querySelector(".info");

let newsList = (news) => {
  sectionOutput.innerHTML = ``;

  for (let i = 0; i < 15; i++) {
    let newsImage = document.createElement('img')
    newsImage.src = `${news[i].urlToImage}`;

    let newsInfo = document.createElement('div');
    let newsTitle = document.createElement("h2");
    newsTitle.textContent = `${news[i].title}`;
    let newsDescription = document.createElement("p");
    newsDescription.textContent = `${news[i].description}`;
    let newsURLCreate = document.createElement("a");
    newsURLCreate.href = `${news[i].url}`;
    newsURLCreate.textContent = `More info...`;
    newsInfo.append(newsTitle);
    newsInfo.append(newsDescription);
    newsInfo.append(newsURLCreate);

    sectionOutput.append(newsImage);
    sectionOutput.append(newsInfo);
  }
};

button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}&from=${startDate.value}&to=${endDate.value}${apiKey}`);
  newsList(response.data.articles)
});

//console.log(response.data.articles[0].description) Articles splits into an indexed key; iterations through articles required to render more than one article


// Pixabay API
// API Key = 13799332-3f90039e97dccd582e335c8f6
// const baseURL2 = "https://pixabay.com/api/?key=13799332-3f90039e97dccd582e335c8f6&q="

// Location: https://pixabay.com/api/?key=13799332-3f90039e97dccd582e335c8f6&q=yellow+flowers&image_type=photo
// button.addEventListener('click', async () => {
//   let response = await axios.get(`${baseURL2}${search.value}&image_type=photo`);
//   photoList(response.data.hits)
// });


// GIPHY API
// API Key = ryyxgP3iKwMxJB4zpLp0ZmK0zKPKqLU7

// Search Parameters
// const baseURL3 = "http://api.giphy.com/v1/gifs/search?q=";
// const apiKey3 = "&api_key=ryyxgP3iKwMxJB4zpLp0ZmK0zKPKqLU7&limit=30";

// Random Parameters
// const baseURL3 = "http://api.giphy.com/v1/gifs/random?&api_key=ryyxgP3iKwMxJB4zpLp0ZmK0zKPKqLU7&limit=30";
// data.images.fixed_width.mp4  Image file location