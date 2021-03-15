import React from "react";
import "./similar-artist.css";
import ArtistCard from "./artist-card.js";

class SimilarArtist extends React.Component {
  state = {
    similarImages: ["", "", "", "", ""],
  };

  componentDidUpdate() {
    this.traerImagenesSimilarArtist(this.props.data);
    console.log("Actualizamo", this.props.data);
  }

  traerImagenesSimilarArtist = (artistaARenderear) => {
    let arrayImagenes = [];
    let imagenFondoGris =
      "https://cdn.shopify.com/s/files/1/0040/5100/9609/products/zoom_zoom1.1_BUHO_GREY_HARMONY_zoom_9708ac2f-f2bc-4dc1-a1ae-fa23eef2b3c8_300x300.png?v=1598392328";

    artistaARenderear.slice(0, 4).map((item, i) => {
      fetch(
        /* Traigo la data del artista from TheAudioDB */
        `https://theaudiodb.com/api/v1/json/1/search.php?s=${item.name}`
      ).then((respuestaAudioDb) => {
        /* La parseo a JSON */
        respuestaAudioDb.json().then((respuestaParseada) => {
          if (
            /* Valido si el artista que trajimos de LASTFM existe en AudioDB y si tiene imagen cargada en AudioDB*/
            respuestaParseada.artists == null ||
            respuestaParseada.artists[0].strArtistThumb == null
          ) {
            /* Si existe y no tiene le asigno una imagen random en el arreglo de nuestro state*/
            /*  item.image[0]["#text"] = imagenFondoGris; */

            arrayImagenes.push(imagenFondoGris);
          } else {
            /* Si existe y tiene, le asigno en nuestro state la imagen que trajimos de AudioDB */
            /* item.image[0]["#text"] =
              respuestaParseada.artists[0].strArtistThumb; */
            arrayImagenes.push(respuestaParseada.artists[0].strArtistThumb);
          }
        });
      });
    });

    this.setState({
      similarImages: arrayImagenes,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row centrado margenes">
          <div className="col-md-12 centrar">
            <h6>Similar Artists</h6>
            <hr />
          </div>
        </div>

        <div className="row centrado  similarArtistCards">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                img={this.state.similarImages[i]}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
