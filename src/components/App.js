import React from 'react';
import RecipeDisplay from './RecipeDisplay';
import { fetchRecipes } from '../utils/apiCalls';
import { loadRecipes, hasErrored, loadComplete } from '../actions/index';
import { connect } from 'react-redux';

import '../App.css';

class App extends React.Component {
  componentDidMount() {
    const { loadRecipes, loadComplete, hasErrored } = this.props;
    fetchRecipes()
    .then(recipes => loadRecipes(recipes))
    .then(() => loadComplete())
    .catch(error => hasErrored(error.message))
  }

  render() {
    const { loading, error } = this.props;
    const loadingGif = `https://media2.giphy.com/media/11FuEnXyGsXFba/source.gif`;
    const loadingIndicator = (
      <section>
        <img src={loadingGif} alt='loading gif'/>
      </section>
    )
    return (
      <main>
        <header className="header">
          <h1>Kitchen Witch:</h1>
          <h4>Guide to transforming ordinary meals into magical creations for the undomestic goddess.</h4>
        </header>
        {loading && loadingIndicator}
        <RecipeDisplay />
      </main>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
