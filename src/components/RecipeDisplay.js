import React, { Component } from 'react';

class RecipeDisplay extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        };
    }

    render() {
        return(
            <section>
                <h2>Recipes Go Here</h2>
            </section>
        )
    }
}

export default RecipeDisplay;