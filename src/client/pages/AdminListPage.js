import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdminUsers } from '../actions';
import requireAuth from '../hoc/requireAuth';

class AdminListPage extends Component {
    
    componentDidMount() {
        const { admin } = this.props;

        if(admin.length === 0) {
            this.props.fetchAdminUsers();
        }
    }

    render() {
        const { admin } = this.props;
        return <div>
            <h3>Here is a list of admin users</h3>
            <ul>
                {
                    admin.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    }

}

export default {
    component: connect( ({admin}) => ({admin}) , {fetchAdminUsers})(requireAuth(AdminListPage)),
    loadData: (({ dispatch }) => dispatch(fetchAdminUsers()))
}
