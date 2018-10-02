import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import AskQuestion from './AskQuestion'
import NoPageFound from '../NoPageFound'

class Questions extends Component {
  render() {
    //console.log('render', this.props.showAnswered)
    if (this.props.showAnswered === undefined) {
      return <NoPageFound />
    }

    if (this.props.showAnswered.showAnswered) {
      return <Poll id={this.props.id} />
    } else {
      return <AskQuestion id={this.props.id} />
    }
  }
}

function mapStateToProps({ authedUser }, props) {
  const { id } = props.match.params
  const showAnswered = props.location.state
  //console.log(showAnswered, id, props)
  return {
    id,
    showAnswered,
    authedUser,
  }
}

export default connect(mapStateToProps)(Questions)
