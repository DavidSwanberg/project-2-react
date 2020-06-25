# Project Overview

## Project Links

- [Github repo link](https://github.com/DavidSwanberg/project-2-react/)
- [add your deployment link]()

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
| Headlines | This will be s scrollable list of headlines rendered upon load | 
| Article | the article card will display upon headline click. Information for the corresponding article will be rendered |
| Reading List | a filtered list of headlines controlled by the user, will behave like the Headlines component | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Architecture | H | 1hr|  |  |
| Pulling and Rendering API | H | 5hrs| |  |
| Headline Component | H | 2hrs | |
| Article Component | H | 5hrs | | |
| List Component | H | 8hrs| | |
| Styling | M | 10 hrs| | |
| Debugging | L | 5 hrs | | |
| Total | H | 36hrs|  |  |

### Time Priority Matrix
[Link](https://imgur.com/XSvZAsM)

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
