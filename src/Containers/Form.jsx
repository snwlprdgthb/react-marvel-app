import React, { Component } from 'react'
import { getData } from '../Store/actions/actions'
import { connect } from 'react-redux'
import Icon from '../Icon/Icon'

class Form extends Component {
  state = {
    string: '',
  }

  onSubmit = e => {
    e.preventDefault()
    this.fetched()
  }

  onChange = e => {
    e.persist()
    this.setState(
      ({ string }) => {
        let val = e.target.value
        return { string: val }
      },
      () => this.fetched()
    )
  }

  fetched() {
    this.props.getData(this.state.string)
  }

  render() {
    return (
      <div>
        <form className="search" onSubmit={this.onSubmit}>
          <input
            className="search-input"
            onChange={this.onChange}
            placeholder="Search"
            value={this.state.string}
          />
          <button className="search-button">
            <Icon id={'icon-search'} value={'search-icon'} />
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  undefined,
  { getData }
)(Form)
