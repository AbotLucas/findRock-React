import React from "react";
import "./search-bar.css";
import logo from "../logoHH.png";
import SearchForm from "./search-form";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  /* El estado nos servira para guardar cambios en el estado de nuestro componente */
  state = {
    busqueda: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="row barra">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <SearchForm
              onChange={this.props.onChange}
              busqueda={this.props.busqueda}
              history={this.props.history}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
