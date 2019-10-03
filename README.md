# **Good News!**

The **Good News!** web application is a one stop shop for news around the world. **Good News!** incorporates a bottomless library of news from countless sources around the world using the [News API](http://www.NewsAPI.org). You can search for any topic and even include a date range for older articles. **Good News!** also offers additional features that can help with the anxiety that generally comes along with reading news in today's time.

# MVP

## **Good News!**
The main function of this web application is to give readers a variety of news articles from around the world by entering a topic of their choice.

**Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a topic in a *text submit* field, pick a range of dates, and then proceed to click a *search button*
  * **Javascript**: The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate an *API call* to News API. The *API call* passes the search value obtained from the *input field* to a function that will iterate through the object returned and find the values we are looking for. We will also set up a function that creates a section to display the information. Once the information is rendered, the reader will be able to pick from two *button* options: 1) Display whole article content in text format via a modal 2) Directs readers to the source url. The API call in javascript looks as follows:

```javascript
  button.addEventListener('click', async () => {
  let response = await axios.get(`${baseURL}${search.value}${apiKey}`);
  console.log(response)});
```

# Stretch Goals - Post MVP

## Good Photo!
This feature allows readers to click the *Search Photos* button and take a break from the anxiety that comes with reading the news. Clicking the button will procure countless photos from Pixabay's Photo API. 

**Technology Implementation**:
  * **User Inferface**: The reader will enter a *search*, then click a *button* that will produce a portfolio of photos related to the search input
  * **Javascript**: This stretch goal will require the use of a second *API call*. The method( ) *event listener* set to 'click' is added to the *Search Photos* button. This will initiate the second *API call* that passes the search value obtained from the *input field*. We will also set up a function that creates a section to display the information.


## Volunteer [Under Construction]
This feature allows readers to look up local volunteer events in case they would like to get active after reading something in the news.

**Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a location in a *text submit* field; then proceed to click a *search button*
  * **Javascript**: This stretch goal will require the use of a third *API call*. The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate the third *API call* that passes the search value obtained from the *input field*. We will also set up a function that creates a section to display the information.

## Charities [Under Construction]
This feature will allow readers to look up charities to causes our readers are passionate about.

**Technology Implementation**:
  * **User Inferface**: The reader will be able to enter a cause they are passionate about, as well as a location, in a *text submit* field; then proceed to click a *search button*
  * **Javascript**: This stretch goal will require the use of a fourth *API call*. The method( ) *event listener* set to 'click' is added to the button the reader clicks. This will initiate the fourth *API call* that passes the search value obtained from the *input field*.

# Wireframe

[Good News! Desktop Wireframe](https://wireframe.cc/j6KuqJ)

![Wireframe Photo](https://i.imgur.com/0lw6SuH.png)

[Good News! Mobile Wireframe](https://wireframe.cc/aqdSWV)

![Wireframe Photo](https://i.imgur.com/kiUlHC8.png)

# Finished Product

![Good News! App](https://i.imgur.com/MS3Mbfq.png)

# Difficulties (Post Completion)

Completing Project 1 had many bumps along the way. Aside from general formatting issues, here are some of the more unique difficulties I encountered:

  * Not all documentation is created equal
    * Searching for API's that 1) contained exactly the information I was looking for 2) presented documentation that was understandable to me 3) free...was very difficult to find. I had to trailor my project based on which API documentation I could understad, followed by what information it contained. I also couldn't find a free API for charities or volunteer events; which prevented me from completing my original idea on a completed app.
  * Synchronous? Or is it asynchronous? Or is is sychronous?...It's javascript!
    * All else equal, placement of my functions in js code mattered...sometimes. Making calls to two different APIs in the same js file interfered with each other, depending on placement in the code

> **Good News!** brought to you by **Raul Jiminian**