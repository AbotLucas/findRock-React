import React from "react";
import SearchBar from "./components/search-bar.js";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import "./page-artist.css";

class PageArtist extends React.Component {
  state = {
    data: {
      artist: {
        image: [{ "#text": "" }],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [{ "#text": "" }, { "#text": "" }, { "#text": "" }],
            },
          ],
        },
      },
    },
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.fetchData(
      //`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=40&artist=sfdk&api_key=5a3a1efb4e152e738f60ced2e4290f87&format=json`
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=coldplay&api_key=5a3a1efb4e152e738f60ced2e4290f87&format=json`
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
        fetch(
          /* Traigo la data del artista from TheAudioDB */
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${data.artist.name}`
        ).then((respuestaAudioDb) => {
          /* La parseo a JSON */
          respuestaAudioDb.json().then((respuestaParseada) => {
            if (
              /* Valido si el artista que trajimos de LASTFM existe en AudioDB y si tiene imagen cargada en AudioDB*/
              respuestaParseada.artists == null ||
              respuestaParseada.artists[0].strArtistThumb == null
            ) {
              /* Si existe y no tiene le asigno una imagen random */
              data.artist.image[0]["#text"] =
                "https://cdn.shopify.com/s/files/1/0040/5100/9609/products/zoom_zoom1.1_BUHO_GREY_HARMONY_zoom_9708ac2f-f2bc-4dc1-a1ae-fa23eef2b3c8_300x300.png?v=1598392328";
            } else {
              /* Si existe y tiene, le asigno en nuestro state la imagen que trajimos de AudioDB */
              data.artist.image[0]["#text"] =
                respuestaParseada.artists[0].strArtistThumb;
            }
            this.setState({
              error: false,
              data: data,
              loading: false,
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
      <React.Fragment>
        <SearchBar
          history={this.props.history}
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row centrado">
            <div className="col-md-6 centrar">
              <img
                src={this.state.data.artist.image[0]["#text"]}
                alt=""
                className="pic-artist img-fluid"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
