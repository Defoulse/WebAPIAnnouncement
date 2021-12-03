import React from 'react';

class SearchBar extends React.Component {
    state = { input: '' };

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Announcement Search</label>
                        <input
                            type="text"
                            value={this.state.input}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;