import React, { useState, useEffect } from "react";
import Headlines from "./components/Headlines/Headlines";
import Article from "./components/Article/Article";
import "./App.css";
import {Route, Link} from 'react-router-dom'

const App = () => {
  const [nytData, setNytData] = useState({});
  const [nytArticle, setNytArticle] = useState({});
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    console.log("inside useEffect - componentDidMount");
    const NYTdata =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=i2JyHtAdfPqB0jQkirLcwBVb7xyCv0US";
    const makeApiCall = async () => {
      const res = await fetch(NYTdata);
      const json = await res.json();
      setNytData(json);
    };
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
    console.log('list',listArr)
  };

  console.log("loaded API", nytData);

  return (
    <div className="App">
      <nav>
        <Link to ='/'>Home </Link>
        <Link to ='/list'> My List</Link>
      </nav>
      <div className="header">
      <h1>Headlines</h1>
      {nytArticle.title ? <Route path='/article/:title' render={props => <Article nytArticle={nytArticle} handleListToggle={handleListToggle}/> }/>: null}
      </div>
      <div className="scrollbox">
  {nytData.results ? <Route path='/' render={props => <Headlines nytData={nytData} setNytArticle={setNytArticle} /> }/>: null}
      </div>
    </div>
  );
};
export default App;