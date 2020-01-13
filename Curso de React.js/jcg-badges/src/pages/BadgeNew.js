import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = e => {
        //Primera forma de guardar valores desde otro componente
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        // this.setState({
        //     form : nextForm
        // });

        //Segunda forma de guardar valores desde otro componente
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log("Info submitted", this.state);
    }

    render () {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge  
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                twitter={this.state.form.twitter}
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;