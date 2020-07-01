import React, { useState, useEffect } from "react";
import Headlines from "./components/Headlines/Headlines";
import Article from "./components/Article/Article";
import Heading from "./components/Heading/Heading";
import ListToggle from "./components/ListToggle/ListToggle";
import LandingImage from "./components/LandingImage/LandingImage";
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
        <Heading onClick={()=> window.location.reload(false)}/>
        {nytArticle.title ? 
        <Route path='/article/:title' render={props => 
        <Article nytArticle={nytArticle} handleListToggle={handleListToggle} readingList={readingList}/> }/>
        : <LandingImage/>}
      </div>
      <ListToggle handleFilterClick={handleFilterClick} filter={filter}/>
      <div className="scrollbox">
        {nytData ? <Route path='/' render={props => <Headlines nytData={displayData} setNytArticle={setNytArticle}/> }/>: null}
      </div>
    </div>
  );
};
export default App;