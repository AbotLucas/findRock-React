import React from "react";
import "./page-home.css";
import logo from "./logoHH.png";
import SearchForm from "./components/search-form-withActions";

class PageHome extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="contenedorHome">
          <div className="container">
            <div className="row centrado">
              <div className="col-md-6 centrar">
                <img src={logo} alt="" id="logo" />
                <SearchForm
                  onChange={this.handleChange}
                  busqueda={this.state.busqueda}
                  history={this.props.history}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageHome;
