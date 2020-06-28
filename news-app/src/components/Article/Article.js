import React from 'react';

const Article = props => {
    console.log('article props',props)

    const handleClick = e =>{
        e.preventDefault()
        props.handleListToggle(props.nytArticle)

    } 

    return (
        <div>
           <img src={props.nytArticle.multimedia[2].url} alt={props.nytArticle.title}/>
           <h3>{props.nytArticle.title}</h3>
         <p>{props.nytArticle.abstract}</p>
         <a href={props.nytArticle.url}>
         Read
         </a>
         <button onClick={handleClick}>Add to List</button>
        </div>
    )
}

export default Article