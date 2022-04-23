import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: "",
        type: "All"
    }

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
    render() {
        return (
            <div className="row search">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            onChange={(e) => this.setState({ search: e.target.value })}
                            id="email_inline"
                            placeholder='search'
                            type="search" className="validate"
                            value={this.state.search}
                            onKeyDown={this.handleKey} />
                        <button
                            onClick={() => {
                                this.props.searchMovies(this.state.search, this.state.type)
                            }}
                            className='search-btn btn'>
                            Search movies
                        </button>
                    </div>
                </div>
                <div>
                    <label>
                        <input
                            onChange={this.handleFilter}
                            class="with-gap" name="group3" type="radio" data-type='all'
                            checked={this.state.type === "all"} />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            onChange={this.handleFilter} class="with-gap" name="group3" type="radio" data-type='movie'
                            checked={this.state.type === "movie"} />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            onChange={this.handleFilter} class="with-gap" name="group3" type="radio" data-type='series'
                            checked={this.state.type === "series"} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>


        );
    }
}

export default Search;
