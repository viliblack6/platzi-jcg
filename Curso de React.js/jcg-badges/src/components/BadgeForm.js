import React from 'react';

class BadgeForm extends React.Component {
    // state = {
    // };

    // handleChange = (event) => {
    //     // console.log("handleChange", {
    //     //     name: event.target.name,
    //     //     value: event.target.value
    //     // });

    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    //     console.log("this.state",this.state);
    // }

    handleClick = (event) => {
        console.log("handleChange", "Button was clicked");
        // console.log("Info submitted", this.state);
    }

    handleSubmit = (event) => {
        console.log("Form was submitted");
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;