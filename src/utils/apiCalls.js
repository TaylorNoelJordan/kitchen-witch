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
    const recipes = await cleanRecipeData(data.results);
    return recipes
}