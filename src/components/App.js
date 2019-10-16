import React from 'react';
import RecipeDisplay from './RecipeDisplay';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App-header">
        <h1>Kitchen Witch:</h1>
        <h4>Guide to transforming ordinary meals into magical creations for the undomestic goddess.</h4>
        <RecipeDisplay />
      </main>
    )
  }
}

export default App;
