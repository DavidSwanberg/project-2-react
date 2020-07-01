import React from 'react';

const ListToggle = props => {
    return(
        <div className="filterList">
        <p onClick={() => props.handleFilterClick("all")} className={props.filter === "all"? "is-active" : ""}id="filterTab">Top Stories</p>
        <p onClick={() => props.handleFilterClick("list")} className={props.filter === "list"? "is-active" : ""}id="filterTab">My List</p>
      </div>
    )
}

export default ListToggle;