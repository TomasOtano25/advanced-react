import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  static propTypes = {
    doSearch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch(event) {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => this.doSearch(),
    );
  }
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
