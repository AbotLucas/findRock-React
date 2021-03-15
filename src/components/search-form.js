import React from "react";
import "./search-form.css";

class SearchForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/busqueda?${this.props.busqueda}`);
  };

  render() {
    return (
      <form name="form" onSubmit={this.handleSubmit}>
        <div className="busqueda">
          <input
            value={this.props.busqueda}
            id="buscar"
            name="busqueda"
            type="text"
            placeholder="Busca una banda"
            onChange={this.props.onChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
