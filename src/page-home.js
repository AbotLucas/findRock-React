import React from "react";
import "./page-home.css";
import logo from "./logoHH.png";
import SearchForm from "./components/search-form-withActions";
import ReactDOM from "react-dom";
import Modal from "./components/modal";
import ModalContent from "./components/ModalContent";

class PageHome extends React.Component {
  state = {
    busqueda: "",
    modal: false,
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
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
                  onClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Asi creo un portal para poder renderizar desde dentro de un componente hacia afuera de los componentes */}
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <ModalContent />
          </Modal>,
          document.getElementById("teleport")
        )}
      </React.Fragment>
    );
  }
}

export default PageHome;
