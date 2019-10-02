const baseURL = "https://newsapi.org/v2/everything?q=";
const apiKey = "&sortBy=popularity&apiKey=07f3568073274011bc90905e922e120e";
const button = document.querySelector("#news-button");
const search = document.querySelector("#news-input");
const startDate = document.querySelector("#start");
const endDate = document.querySelector("#end");
const sectionOutput = document.querySelector(".info");
const modalContent = document.querySelector(".modalInnerText");
const modal = document.querySelector(".modal");
const span = document.querySelector("span");

let newsList = (news) => {
  sectionOutput.innerHTML = ``;

  for (let i = 0; i < 15; i++) {
    let newsImage = document.createElement('img')
    newsImage.src = `${news[i].urlToImage}`;

    let newsInfo = document.createElement('div');
    let newsTitle = document.createElement("h2");
    newsTitle.textContent = `${news[i].title}`;
    let newsSource = document.createElement("h4");
    newsSource.textContent = `${news[i].source.name}`;
    let newsDescription = document.createElement("p");
    newsDescription.textContent = `${news[i].description}`;
    let modalBtn = document.createElement("button");
    modalBtn.class = `modal-btn`;
    modalBtn.textContent = `Description`;
    let newsURLCreate = document.createElement("a");
    newsURLCreate.href = `${news[i].url}`;
    newsURLCreate.target = `_blank`;
    newsURLCreate.textContent = `Website Link`;
    newsInfo.append(newsTitle);
    newsInfo.append(newsSource);
    newsInfo.append(newsDescription);
    newsInfo.append(modalBtn);
    newsInfo.append(newsURLCreate);

    sectionOutput.append(newsImage);
    sectionOutput.append(newsInfo);

    modalBtn.addEventListener('click', () => {
      modalContent.textContent = `${news[i].content}`;
      modal.style.display = "block";
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    });
  }
};

// console.log(response.data.articles[0].description) Articles splits into an indexed key; iterations through articles required to render more than one article
button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}&from=${startDate.value}&to=${endDate.value}${apiKey}`);
  newsList(response.data.articles)
});