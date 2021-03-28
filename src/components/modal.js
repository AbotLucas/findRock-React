import React from "react";
import "./modal.css";

class Modal extends React.Component {
  state = {
    estado: this.props.estado,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      estado: false,
    });
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      estado: props.estado,
    });
  }

  render() {
    if (this.state.estado !== true) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="modale">
          <div className="cardModal">
            <button className="btn salir" onClick={this.handleClick}>
              X
            </button>
            {/* Hago una llamada a los hijos del componente 
                En la renderizacion, meto en el componente lo que le enviemos en el padre*/}
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
