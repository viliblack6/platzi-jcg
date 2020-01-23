import React from 'react';
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

export default class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                data: data
            });
        }
        catch(error) {
            this.setState({
                error: error
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    handleOpenModal = e => {
        this.setState({modalIsOpen: true});
    }
    
    handleCloseModal = e => {
        this.setState({modalIsOpen: false});
    }

    hanldeDeleteBadge = async e => {
        this.setState({
            loading: true, 
            error: null
        });
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges');
        }
        catch(error) {
            this.setState({ error: error });
        }
        finally {
            this.setState({ loading: false });
        }
    }

    render() {
        if (this.state.loading) return <PageLoading />
        if (this.state.error) return <PageError error={this.state.error}/>
        return(
            <BadgeDetails 
                badge={this.state.data} 
                modalIsOpen={this.state.modalIsOpen} 
                onOpenModal={this.handleOpenModal} 
                onCloseModal={this.handleCloseModal}
                onDeleteBadge={this.hanldeDeleteBadge}
                />
        );
    }
}