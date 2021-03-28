import React from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends React.Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
    loading: false,
    error: null,
  };
  /* Cada vez que modifiquemos la busqueda, se modificara el state busqueda de page-search-result, que envia como prop.busqueda 
  a serach-results, por tanto cada vez que se actualice un prop nuevo, la busqueda cambiara. */
  UNSAFE_componentWillReceiveProps(e) {
    let terminoDeBusqueda = e.busqueda;
    this.fetchData(
      //`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=40&artist=l&api_key=5a3a1efb4e152e738f60ced2e4290f87&format=json`
      `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=40&artist=${terminoDeBusqueda}&api_key=5a3a1efb4e152e738f60ced2e4290f87&format=json`
    );
  }

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
        });
      } else {
        data.similarartists.artist.map((artista, i) => {
          return fetch(
            `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista.name}`
          ).then((respuestaAudioDb) => {
            respuestaAudioDb.json().then((respuestaParseada) => {
              if (
                respuestaParseada.artists == null ||
                respuestaParseada.artists[0].strArtistThumb == null
              ) {
                data.similarartists.artist[i].image[0]["#text"] =
                  "https://cdn.shopify.com/s/files/1/0040/5100/9609/products/zoom_zoom1.1_BUHO_GREY_HARMONY_zoom_9708ac2f-f2bc-4dc1-a1ae-fa23eef2b3c8_300x300.png?v=1598392328";
              } else {
                data.similarartists.artist[i].image[0]["#text"] =
                  respuestaParseada.artists[0].strArtistThumb;
              }

              this.setState({
                error: false,
                data: data,
                loading: false,
              });
            });
          });
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        errorMensaje: error,
      });
    }
  };

  render() {
    return (
      //React.Fragment genera un contenedor para englobar todo el return que no sera renderizado en el browser
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {/* La funcion map mapea un array  */}
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[0]["#text"]}
                  titulo={artista.name}
                  key={i}
                />
              );
            })}{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
