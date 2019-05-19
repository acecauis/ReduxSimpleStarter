import React, { Component } from 'react';
// ^ same thing as:  const Component = React.Component;

// Creating a Javascript class
// enhancing base 'SearchBar' class behaviour extending it with a React base
// component class.
// 'extends React.Component' gives our 'SearchBar' class functionality from
// the 'React.component' class.

// Always start with a functional component, and only go back and refactor when
// you think you need a class component.
class SearchBar extends Component {
  // adding a new method called 'constructor'
  constructor(props) {
    // adding a new method called 'super()'
    super(props);


    // this.state = an object called 'term', where 'term' is an empty string
    this.state = { term: '' };
  }

  render() {
    // to change state in component, we use this.setState()
    // we always manipulate our state with 'this.setState()'
    // Using 'setState' is what allows us to maintain contuity
    // you know behind the scenes is doing a tremendous amount of stuff with
    // a state object, so if we just change the value, React doesn't really
    // know that the value changed.

    // We use the 'this.setState()' method to inform React that the state is
    // changing and what the new state is.
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
