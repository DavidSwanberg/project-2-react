import React from 'react';
import {Link} from 'react-router-dom'

const List = props => {
    console.log('props on the list page',props)
    let myList = props.readingList.map(article => {

        const handleClick = async (e) =>{
          props.setNytArticle(article)
        }
    
        return <li onClick={handleClick}>
            <Link to={"/article/"+article.uri}>{article.title}</Link>
            </li>;
      });
    return( 
        <div>
            <p>howdy</p>
            <ul>
                {myList}
            </ul>
        </div>

    )
}

export default List;