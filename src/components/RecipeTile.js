import React from 'react';

const RecipeTile = ({ img, cook_time, description, id, name, video, yields }) => {
    return (
        <article id={id} className="recipe-tile">
            <img src={img} alt='recipe thumbnail' className="recipe-img"/>
            <h3>{name}</h3>
            {/* <p>{description}</p> */}
            <p>{cook_time}</p>
            <p>{yields}</p>
            <a href={video}>Watch Video</a>
        </article>
    )
}

export default RecipeTile