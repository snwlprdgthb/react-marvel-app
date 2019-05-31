import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Item from '../Components/Item'
import {
  getComics,
  getEvents,
  getStories,
  getSeries,
} from '../Store/actions/actions'
import ComicsList from '../Containers/ComicsList'

class MainList extends Component {
  state = {
    showModal: false,
  }

  createList(array) {
    return array.map(item => {
      return (
        <Item
          getComics={() => this.getData(item.id, this.props.getComics)}
          getEvents={() => this.getData(item.id, this.props.getEvents)}
          getStories={() => this.getData(item.id, this.props.getStories)}
          getSeries={() => this.getData(item.id, this.props.getSeries)}
          key={item.id}
          item={item}
        />
      )
    })
  }

  getData = (id, method) => {
    this.toogleModal()
    method(id)
  }

  toogleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal }
    })
  }

  closeModalOutside = e => {
    const elem = ReactDOM.findDOMNode(this)
    if (!elem || !elem.contains(e.target)) {
      return
    } else {
      this.toogleModal()
    }
  }

  render() {
    const { data } = this.props
    const a = this.state.showModal ? (
      <ComicsList
        closeModal={this.toogleModal}
        closeModalOutside={this.closeModalOutside}
      />
    ) : null

    return (
      <>
        <div className="main-section">{this.createList(data)}</div>
        {a}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.characters.data,
  }
}

export default connect(
  mapStateToProps,
  { getComics, getEvents, getStories, getSeries }
)(MainList)
