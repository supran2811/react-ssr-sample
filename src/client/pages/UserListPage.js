import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {

    componentDidMount() {
        this.props.users.length === 0 && this.props.fetchUsers();
    }

    renderUser() {
        return this.props.users.map(user => {
            return <li key={user.id}> {user.name} </li>
        })
    }

    render() {
        return <div>
            Here is a user list!!!
            <ul>
                {this.renderUser()}
            </ul>
        </div>
    }
}

const mapStateToProps = state => ({
    users : state.users
});

export function loadData( store ) {
    return store.dispatch(fetchUsers());
}

export default {component: connect(mapStateToProps , { fetchUsers })(UserList) ,
loadData};
