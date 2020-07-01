import React from 'react';
import './Article.css' 

const Article = props => {
    console.log('article props',props)

    const handleClick = e =>{
        e.preventDefault()
        props.handleListToggle(props.nytArticle)

    } 

    const option = props.readingList.includes(props.nytArticle) ? "remove from list" : "add to list";

    return (
        <div className="articleBox">
          {props.nytArticle.multimedia ? <img src={props.nytArticle.multimedia[2].url} alt={props.nytArticle.title}/>:null}
           <h3>{props.nytArticle.title}</h3>
         <p className="abstractBox">{props.nytArticle.abstract}</p>
         <a className="articlebutton" href={props.nytArticle.url}>
         Read
         </a>
         <p className="articlebutton" onClick={handleClick}>{option}</p>
        </div>
    )
}

export default Article