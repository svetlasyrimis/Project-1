# **Good News!**

The **Good News!** web application is a one stop shop for news around the world. **Good News!** incorporates a bottomless library of news from countless sources around the world using the [News API](http://www.NewsAPI.org). You can search for any topic and even include a date range for older articles. **Good News!** also offers additional features that can help with the anxiety that generally comes along with reading news in today's time.

# MVP

## **Good News!**
The main function of this web application is to give readers a variety of news articles from around the world by entering a topic of their choice.

**Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a topic in a *text submit* field; then proceed to click a *search button*
  * **Javascript**: The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate an *API call* that passes the search value obtained from the *input field*. From this, we will be able to iterate through the object returned and find the value we are looking for. We will also set up a function that creates a section to display the information. The API call in javascript looks as follows:

```javascript
  button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}${apiKey}`);
  console.log(response)});
```

# Stretch Goals - Post MVP

## Feeling Anxious?
This feature allows readers to click the *Feel Good* button and take a break from the anxiety that comes with reading the news. Clicking the button will procure funny jokes, memes, or photos. 

**Technology Implementation**:
  * **User Inferface**: The reader will click a *button* that will produce either jokes, funny memes, or photos
  * **Javascript**: This stretch goal will require the use of a second *API call*. The method( ) *event listener* set to 'click' is added to the *Feel Good* button. This will initiate the second *API call* that passes the search value obtained from the *input field*. We will also set up a function that creates a section to display the information.


## Feeling Motivated?
This feature allows readers to look up local volunteer events in case they would like to get active after reading something in the news.

**Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a location in a *text submit* field; then proceed to click a *search button*
  * **Javascript**: This stretch goal will require the use of a third *API call*. The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate the third *API call* that passes the search value obtained from the *input field*. We will also set up a function that creates a section to display the information.

## Feeling Generous?
  * This feature will allow readers to look up charities to causes our readers are passionate about.
  **Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a cause they are passionate about, as well as a location, in a *text submit* field; then proceed to click a *search button*
  * **Javascript**: This stretch goal will require the use of a fourth *API call*. The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate the fourth *API call* that passes the search value obtained from the *input field*.

# Wireframe

[Good News! Desktop Wireframe](https://wireframe.cc/j6KuqJ)

![Wireframe Photo](https://i.imgur.com/0lw6SuH.png)

[Good News! Mobile Wireframe](https://wireframe.cc/aqdSWV)

![Wireframe Photo](https://i.imgur.com/kiUlHC8.png)

> **Good News!** brought to you by **Raul Jiminian**