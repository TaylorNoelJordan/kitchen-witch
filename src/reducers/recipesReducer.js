export const recipesReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_RECIPES':
            return action.recipes;

        default:
            return state;
    }
};