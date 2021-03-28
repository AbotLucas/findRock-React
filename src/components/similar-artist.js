import React from "react";
import "./similar-artist.css";
import ArtistCard from "./artist-card.js";

class SimilarArtist extends React.Component {
  state = {
    similarArtist: [
      {
        image: [{ "#text": "" }],
      },
      {
        image: [{ "#text": "" }],
      },
      {
        image: [{ "#text": "" }],
      },
      {
        image: [{ "#text": "" }],
      },
    ],
  };

  UNSAFE_componentWillReceiveProps(props) {
    setTimeout(() => {
      this.setState({
        similarArtist: props.similar,
      });
    }, 2000);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row centrado margenes">
          <div className="col-md-12 centrar">
            <h5>Similar Artists</h5>
            <hr />
          </div>
        </div>
        <div className="row centrado similarArtistCards">
          {this.state.similarArtist.length > 0 ? (
            this.state.similarArtist.slice(0, 4).map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[0]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })
          ) : (
            <h6 className="mb-5 mt-3">
              Hubo un problema y no tenemos artistas similares para mostrarte.🤷
            </h6>
          )}{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
