import React, { useState, useEffect } from "react";
import Headlines from "./components/Headlines/Headlines";
import Article from "./components/Article/Article";
import "./App.css";
import {Route, Link} from 'react-router-dom'

const App = () => {
  const [nytData, setNytData] = useState([]);
  const [nytArticle, setNytArticle] = useState({});
  const [readingList, setReadingList] = useState([]);
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    //console.log("inside useEffect - componentDidMount");
    const NYTdata =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=i2JyHtAdfPqB0jQkirLcwBVb7xyCv0US";
    const makeApiCall = async () => {
      const res = await fetch(NYTdata);
      const json = await res.json();
      setNytData(json.results);
    }
    makeApiCall();
  }, []);

  


  const handleListToggle = article => {
    const listArr = readingList.slice();
    const articleIndex = listArr.indexOf(article);
    if (articleIndex > -1) {
      listArr.splice(articleIndex, 1);
    } else {
      listArr.push(article);
    }
    setReadingList(listArr);
    console.log('listArr',listArr)
  };
  console.log('readingList',readingList)

  console.log("loaded API", nytData);

  const handleFilterClick = filter => {
    console.log(`setting filter to ${filter}`);
    setFilter(filter);

  };
  const displayData = filter === "list" ? readingList : nytData;
  console.log('filter',filter)
  return (
    <div className="App">
      <div className="header">
        <h1 onClick={()=> window.location.reload(false)}>Headlines.</h1>
        {nytArticle.title ? 
        <Route path='/article/:title' render={props => 
        <Article nytArticle={nytArticle} handleListToggle={handleListToggle} readingList={readingList}/> }/>
        : <div className="landingImg"><img className="landingGif"src="https://media.giphy.com/media/GCjueAStKH9yU/giphy.gif" alt="gif"/></div>}
      </div>
      <div className="filterList">
        <p onClick={() => handleFilterClick("all")} className={filter === "all"? "is-active" : ""}>Top Stories</p>
        <p onClick={() => handleFilterClick("list")} className={filter === "list"? "is-active" : ""}>My List</p>
      </div>
      <div className="scrollbox">
        {nytData ? <Route path='/' render={props => <Headlines nytData={displayData} setNytArticle={setNytArticle}/> }/>: null}
      </div>
    </div>
  );
};
export default App;