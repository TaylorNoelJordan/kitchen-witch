import React from 'react';
import RecipeTile from './RecipeTile';
import { loadRecipes, hasErrored, loadComplete } from '../actions/index';
import { connect } from 'react-redux';

const RecipeDisplay = ({ recipes }) => {
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
                {recipeThumbnails}
            </section>
        )
}

const mapStateToProps = state => ({
    recipes: state.recipes,
    error: state.error,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    loadComplete: () => dispatch(loadComplete()),
    loadRecipes: recipes => dispatch(loadRecipes(recipes)),
    hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDisplay);