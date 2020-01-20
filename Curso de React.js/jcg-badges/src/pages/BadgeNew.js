import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state.form);
            this.props.history.push('/badges');
        }
        catch(error) {
            this.setState({ error: error });
        }
        finally {
            this.setState({ loading: false });
        }
    }

    render () {
        if (this.state.loading) return <PageLoading/>
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo"/>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge  
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;