const cleanRecipeData = recipeData => {
    return recipeData.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.name,
            video: recipe.video_url,
            img: recipe.thumbnail_url,
            yields: recipe.yields,
            cook_time: recipe.cook_time_minutes,
            description: recipe.description
            // instructions: recipe.instructions.map(item => {
            //     return {
            //         instruction: item.display_text
            //     }
            // })
        }
    })
}

export default cleanRecipeData;