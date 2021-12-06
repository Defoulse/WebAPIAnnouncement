import React from 'react';
import SearchBar from './SearchBar';
import Announcement from '../apis/Announcement';
import AnnouncementList from './AnnouncementList';

class App extends React.Component {
    state = { announcements: [] };

    onInputSubmit = async (input) => {
        var response;
        if (input === "") {
            response = await Announcement.get('/announcements');
        }
        else {
            response = await Announcement.get('/announcements/' + input);
        }
        this.setState({ announcements: response.data });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
                <AnnouncementList announcements={this.state.announcements} />
            </div>
        );
    }
}

export default App;