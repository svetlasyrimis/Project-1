//Text link to NewsAPI.org that reads: Powered by News API
const baseURL = "https://newsapi.org/v2/everything?q=";
const apiKey = "&apiKey=07f3568073274011bc90905e922e120e";

const button = document.querySelector("button");
const search = document.querySelector("input");
const sectionOutput = document.querySelector("section");


button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}${apiKey}`);
  console.log(response)
  newsList(response.data.articles)
});