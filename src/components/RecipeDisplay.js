import React, { Component } from 'react';
import { fetchRecipes } from '../utils/apiCalls';
import RecipeTile from './RecipeTile'

class RecipeDisplay extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetchRecipes()
        .then(recipes => this.setState({ recipes }))
        .then(this.setState({isLoading: false}))
        .catch(error => console.log(error))
    }

    render() {
        const loadingGif = `https://media2.giphy.com/media/11FuEnXyGsXFba/source.gif`
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
            {this.state.isLoading && <img src={loadingGif} alt='loading gif'/>}
                {recipeThumbnails}
            </section>
        )
    }
}

export default RecipeDisplay;