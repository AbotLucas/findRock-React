import React from "react";
import "./search-form.css";
import Actions from "./form-actions.js";

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
        <Actions onClick={this.props.onClick} />
      </form>
    );
  }
}

export default SearchForm;
