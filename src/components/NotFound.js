import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
    <div>
      <h1 className='center'>404 - Page Not Found!</h1>
    </div>
    );
  }
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(NotFound);
