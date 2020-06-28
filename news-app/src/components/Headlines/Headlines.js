import React from "react";
import {Link} from 'react-router-dom'
import './Headlines.css' 

const Headlines = props => {
  let newsList = props.nytData.results.map(article => {

    const handleClick = async (e) =>{
      props.setNytArticle(article)
    }

    return <li onClick={handleClick}>
        <Link to={"/article/"+article.uri}>{article.title}</Link>
        </li>;
  });

  return (
    <div>
      <ul >{newsList}</ul>
    </div>
  );
};

export default Headlines;