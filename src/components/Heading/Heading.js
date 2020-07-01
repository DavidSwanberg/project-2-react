import React from 'react';

const Heading = () =>{
    return (
        <h1 onClick={()=> window.location.reload(false)}>Headlines.</h1>
    )
}

export default Heading