import React from 'react';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementList = ({ announcements }) => {
    const renderedList = announcements.map(item => {
        return <AnnouncementItem key={item.Id} announcement={item} />;
    });

    return <div className="ui cards">{renderedList}</div>
};

export default AnnouncementList;