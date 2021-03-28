import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search,
    });
  }

  handleChange = (e) => {
    /* Usamos el metodo setstate de la clase object de javascript */
    this.setState({ busqueda: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          busqueda={this.state.busqueda}
          history={this.props.history}
          onChange={this.handleChange}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
