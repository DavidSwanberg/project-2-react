import React from 'react';
import './Article.css' 

const Article = props => {
    console.log('article props',props)

    const handleClick = e =>{
        e.preventDefault()
        props.handleListToggle(props.nytArticle)

    } 

    const option = props.readingList.includes(props.nytArticle) ? "Remove from List" : "Add to list";

    return (
        <div className="articleBox">
        <div className="articleMedia">
          {props.nytArticle.multimedia ? <img className="articleImg" src={props.nytArticle.multimedia[2].url} alt={props.nytArticle.title}/>:null}
          </div>
          <div className="articleContent">  
          <h3 className="articleTitle">{props.nytArticle.title}</h3>
         <p className="abstractBox">{props.nytArticle.abstract}</p>
         <div className="articleButtons">
         <a className="articlebutton" href={props.nytArticle.url}>
         Read
         </a>
         <p className="articlebutton" onClick={handleClick}>{option}</p>
         </div>
         </div>
        </div>
    )
}

export default Article