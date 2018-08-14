import React, { Component } from 'react'

class NewQuestion extends Component {
  state = {
    textOptionOne: '',
    textOptionTwo: '',
  }
  handleChange = e => {
    e.persist()
    const optionKey = e.target.name
    const optionValue = e.target.value
    console.log('input: ', optionKey, optionValue)
    this.setState({ [optionKey]: optionValue })
  }
  handleSubmit = e => {
    e.preventDefault()

    const { textOptionOne, textOptionTwo } = this.state

    // todo: add question to store

    console.log('New Question: ', this.state)

    this.setState(() => ({
      textOptionOne: '',
      textOptionTwo: '',
    }))
  }
  render() {
    const { textOptionOne, textOptionTwo } = this.state
    console.log('render: ', textOptionOne, textOptionTwo)

    return (
      <div className="new-question">
        <h3 className="center">Create New Question</h3>
        <form className="form-question" onSubmit={this.handleSubmit}>
          <textarea
            name="textOptionOne"
            placeholder="Option 1"
            value={textOptionOne}
            onChange={this.handleChange}
            className="textarea-question"
            maxLength={120}
          />
          <textarea
            name="textOptionTwo"
            placeholder="Option 2"
            value={textOptionTwo}
            onChange={this.handleChange}
            className="textarea-question"
            maxLength={120}
          />
          <button
            className="btn-question"
            type="submit"
            disabled={textOptionOne === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewQuestion
