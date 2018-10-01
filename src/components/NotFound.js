import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    console.log('notfounduser', this.props.authedUser, this.props.users)
    return (
    <div>
      <h1 className='center'>404 - Page Not Found!</h1>
    </div>
    );
  }
};

function mapStateToProps({ authedUser, users }) {
  return {
    users,
    authedUser,
  }
}


export default withRouter(connect(mapStateToProps)(NotFound))
