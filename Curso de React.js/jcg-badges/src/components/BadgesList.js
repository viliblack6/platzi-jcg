import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render () {
        return (
            <div className="Badges_list">
                <div className="Badges_container">
                    <ul className="list-unstyled">
                        {this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id} className="BadgesListItem">
                                    <img src={badge.avatarUrl} alt="Avatar" className="BadgesListItem__avatar"/>
                                    <p>{badge.firstName}</p>
                                    <p>{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BadgesList;