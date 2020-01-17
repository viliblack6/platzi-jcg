import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render () {
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="badges/new">Create new badge</Link>
                </div>
            );
        }
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