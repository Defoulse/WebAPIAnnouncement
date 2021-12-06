import React from 'react';

const AnnouncementItem = ({ announcement }) => {
    return (
        <div className="card">
            <div className="content">
                <div className="header">{announcement.Title}</div>
                <div className="meta">{announcement.Id}</div>
                <div className="description">{announcement.Information}</div>
                <div className="description">Price: {announcement.Price}</div>
            </div>
        </div>
    );
};

export default AnnouncementItem;