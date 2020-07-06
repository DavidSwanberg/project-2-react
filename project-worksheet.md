# Project Overview

## Project Links

- [Github repo link](https://github.com/DavidSwanberg/project-2-react/)
- [deployment link](https://jovial-goodall-a7f59a.netlify.app/)
- [YoutTube link](https://youtu.be/Xw2mCpsIkso)

## Project Description

A single page application built in React. The New York Times Top Stories headlines will render as a list on the home page. Upon clicking the headline a card will be revealed that includes the article image, title, description, and link. The user will also have an opportunity to add the article their "reading-list". Post-MVP could include data from other news sources as well as the ability to save or email out a reading-list.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
[CodeSandbox that shows I can access and render the API](https://codesandbox.io/s/loadedapi-nmd9o?file=/src/App.js)

```
{data: {} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://imgur.com/DTjvshX)
- [react architecture](https://imgur.com/acuH4GL)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Render NYtimes Top-Stories Headlines on page
- Upon clicking headline, app will reveal an article card with headline, image, summary, link, and 'Add to List' button
-User will be able to filter articles into a 'reading list' that they will be able to view and scroll through

#### PostMVP EXAMPLE

- pull API from multiple news sources (i.e. the Post, Guardian, etc.)
- ability to save or email 'reading list'

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Headlines | This will be a scrollable list of headlines with the ability to filter the headlines into a reading list| 
| Article | the article card will display upon headline click. Information for the corresponding article will be rendered |
| List Toggle |  a bar above the headlines that toggles between Top Stories and My List|
| Landing Image | a gif or image that appears in the article area upon load. Post-mvp might include a variety of images randomly selected from an array| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Architecture | H | 1hr| 1hr | 1hr |
| Pulling and Rendering API | H | 5hrs| 2hr |  2hr|
| Headline Component | H | 2hrs | 1hr | 2hr |
| Article Component | H | 5hrs | 6hr| 6hr |
| List Component | H | 8hrs| 6hr | 6hr |
| Styling | M | 10 hrs| 9hr | 8hr |
| Debugging | L | 5 hrs | 1hr| 1hr |
| Total | H | 36hrs| 30hr | 30hr |

### Time Priority Matrix
[Link](https://imgur.com/XSvZAsM)

## Additional Libraries
N/A

## Code Snippet

A function that moves data into my reading list array.

```
const handleListToggle = article => {
    const listArr = readingList.slice();
    const articleIndex = listArr.indexOf(article);
    if (articleIndex > -1) {
      listArr.splice(articleIndex, 1);
    } else {
      listArr.push(article);
    }
    setReadingList(listArr);
  };
```
