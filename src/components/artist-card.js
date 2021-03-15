import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";

class ArtistCard extends React.Component {
  //El metodo render de nuestros componentes es el que renderizara nuestro html

  render() {
    return (
      <div className="col-md-3">
        {/* EL LINK de react router dom nos permite que al hacer click los rutee hacia la url que le indiquemos */}
        <Link to={`/artista?${this.props.titulo}`}>
          <div className="item">
            {/* cargo la imagen de la card conel prop recibido */}
            <img className="pic img-fluid" src={this.props.img} alt="" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
