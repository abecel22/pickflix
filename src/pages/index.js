import React, { Component } from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SearchBar from "../components/searchBar";

import SEO from "../components/seo";

class IndexPage extends Component {
  searchMovie = text => {
    console.log(`You searched ${text}`);
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>PickFlix</h1>
        <p>Discover new movies to watch</p>
        <SearchBar searchMovie={this.searchMovie} />
      </Layout>
    );
  }
}

export default IndexPage;
