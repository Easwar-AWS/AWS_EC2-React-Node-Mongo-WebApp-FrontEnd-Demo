import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-12" style={{color:'AppWorkspace', border:'solid 3px', height:'700px', paddingTop:'20px'}}>
                <div className="col-md-10 col-md-offset-1">
                    <h1>Hi {user.firstName}! Welcome to AWS EC2 Demo Session</h1>
                    <h2 style={{textAlign:'center'}}>You're logged in with React+Node+Mongo WebApp!!!</h2>
                </div>
                <div className="col-md-1">
                    <p>
                        <Link to="/login" style={{fontWeight:"bold", color:'red'}}>Logout</Link>
                    </p>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };