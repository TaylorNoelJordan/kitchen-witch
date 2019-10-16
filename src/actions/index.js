export const loadRecipes = recipes => ({
    type: 'LOAD_RECIPES',
    recipes
});

export const loadComplete = () => ({
    type: 'LOAD_COMPLETE'
});

export const hasErrored = error => ({
    type: 'HAS_ERRORED',
    error
});

