import React, { Component } from 'react';
import { fetchRecipes } from '../utils/apiCalls';
import RecipeTile from './RecipeTile'

class RecipeDisplay extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        fetchRecipes()
        .then(recipes => this.setState({ recipes }))
        .catch(error => console.log(error))
    }

    render() {
        const { recipes } = this.state;
        const recipeThumbnails = recipes.map(recipe => {
            const { name, id, description, cook_time, video, img, yields } = recipe;
            return (
                <RecipeTile 
                    name={name}
                    img={img}
                    description={description}
                    video={video}
                    yields={yields}
                    cook_time={cook_time}
                    id={id}
                />
            )
        })
        return(
            <section className="recipe-display">
                <h2>Recipes Go Here</h2>
                {recipeThumbnails}
            </section>
        )
    }
}

export default RecipeDisplay;