import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge  
                                firstName="Javier" 
                                lastName="Cureño Guzmán"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle=".Net Developer"
                                twitter="JCG" 
                                />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;