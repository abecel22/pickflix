import React, { Component, Fragment } from "react";
import "./styles/searchbar.css";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchMovie(this.state.text);
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="search"
            className="search-bar"
            id="search"
            placeholder="Search a movie"
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </Fragment>
    );
  }
}

export default SearchBar;
