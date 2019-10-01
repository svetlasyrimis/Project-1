//Text link to NewsAPI.org that reads: Powered by News API

// News Selectors
const baseURL = "https://newsapi.org/v2/everything?q=";
const apiKey = "&sortBy=popularity&apiKey=07f3568073274011bc90905e922e120e";
const button = document.querySelector("#news-button");
const search = document.querySelector("#news-input");
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
    let modalCreate = document.createElement("button");
    modalCreate.textContent = `Article Content`;
    let newsURLCreate = document.createElement("a");
    newsURLCreate.href = `${news[i].url}`;
    newsURLCreate.target = `_blank`;
    newsURLCreate.textContent = `Take me to site`;
    newsInfo.append(newsTitle);
    newsInfo.append(newsDescription);
    newsInfo.append(modalCreate);
    newsInfo.append(newsURLCreate);

    sectionOutput.append(newsImage);
    sectionOutput.append(newsInfo);
  }
};

// console.log(response.data.articles[0].description) Articles splits into an indexed key; iterations through articles required to render more than one article
button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}&from=${startDate.value}&to=${endDate.value}${apiKey}`);
  newsList(response.data.articles)
});