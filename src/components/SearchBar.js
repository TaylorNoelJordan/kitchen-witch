import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        };
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="search recipes" 
                    name="searchQuery" 
                    value={this.state.searchQuery}
                    // onChange={this.handleChange(e)}
                />
            </form>
        )
    }
}

export default SearchBar;