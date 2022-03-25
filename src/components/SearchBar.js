import React from "react";

export default class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          action=""
          method=""
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              name="keyword"
              onChange={this.onInputChange}
            ></input>
          </div>
          <div className="field">
            <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}
