import React from 'react';

const LandingImage = () => {

    const landingArr=[
        "https://media.giphy.com/media/GCjueAStKH9yU/giphy.gif",
        "https://media.giphy.com/media/3oEduPlMkw4LZE7624/giphy.gif",
        "https://i.imgur.com/6xVEvcx.gif",
        "https://media.giphy.com/media/YfF3EbQEV4PpS/giphy.gif",
        "https://media.giphy.com/media/xT5LMVWz3V7QdLPIFG/giphy.gif",
        "https://media.giphy.com/media/l0MYAFkLQ0ga4KjBK/giphy.gif"



    ]

    let randomImg = landingArr[Math.floor(Math.random()*landingArr.length)];



    return(
        <div className="landingImg"><img className="landingGif" src={randomImg} alt="gif"/></div>
    )
}

export default LandingImage;