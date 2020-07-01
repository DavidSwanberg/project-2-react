import React from "react";
import {Link} from 'react-router-dom'
import './Headlines.css' 

const Headlines = props => {
    console.log('headlines props', props)
  let newsList = props.nytData.map(article => {

    const handleClick = async (e) =>{
      props.setNytArticle(article)
    }

    return <li onClick={handleClick}>
        <Link to={"/article/"+article.uri}>{article.title}</Link>
        </li>;
  });

  return (
    <div className="Headlines">
      <ul >{newsList}</ul>
    </div>
  );
};

export default Headlines;