import React, { Component } from 'react'

class NewQuestion extends Component {
  state = {
    textOptionOne: '',
  }
  handleChange = e => {
    const textOptionOne = e.target.value

    this.setState(() => ({
      textOptionOne,
    }))
  }
  handleSubmit = e => {
    e.preventDefault()

    const { textOptionOne } = this.state

    // todo: add question to store

    console.log('New Question: ', textOptionOne)

    this.setState(() => ({
      textOptionOne: '',
    }))
  }
  render() {
    const { textOptionOne } = this.state

    return (
      <div className="myCssClass">
        <h3 className="center">Create New Question</h3>
        <form className="" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1"
            value={textOptionOne}
            onChange={this.handleChange}
            className="textarea"
            maxLength={120}
          />
        </form>
      </div>
    )
  }
}

export default NewQuestion
