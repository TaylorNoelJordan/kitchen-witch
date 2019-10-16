import cleanRecipeData from './cleaner';
import { apiKey } from './apiKey';

export const fetchRecipes = async () => {
    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&sizes=20"
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key' : `${apiKey}`
        }
    }

    const response = await fetch(url, options);
    const data = await response.json()
    console.log(data.results)
    const recipes = await cleanRecipeData(data.results);
    console.log(recipes)
    return recipes
}