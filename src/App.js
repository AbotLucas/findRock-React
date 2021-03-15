import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* Aca definimos el path que nos ruteara y el componente a renderear */}
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
