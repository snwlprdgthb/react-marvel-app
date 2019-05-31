import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../Components/Spinner'
import Comics from '../Components/Comics'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'

class ComicsList extends Component {
  createComicsList = array => {
    return array.map(val => {
      return (
        <Comics
          key={val.id}
          title={val.title}
          pic={
            (val.thumbnail && val.thumbnail.path) ||
            this.props.data[3].thumbnail.path
          }
        />
      )
    })
  }

  createString() {
    return <p className="comics-empty">List is empty :(</p>
  }

  isEmpty = data => {
    if (!data.length) {
      return this.createString()
    } else {
      return this.createComicsList(data)
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.props.closeModalOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.closeModalOutside)
  }
  render() {
    const { comics, comicsLoading, closeModal } = this.props
    const a = comicsLoading ? <Spinner /> : this.isEmpty(comics)
    return (
      <div className="comics">
        <button className="comics-button" onClick={closeModal}>
          <Icon id={'icon-close'} />
        </button>
        {a}
      </div>
    )
  }
}

ComicsList.propTypes = {
  data: PropTypes.array,
  comics: PropTypes.array,
  comicsLoading: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    data: state.characters.data,
    comics: state.characters.comics,
    comicsLoading: state.characters.comicsLoading,
  }
}
export default connect(
  mapStateToProps,
  undefined
)(ComicsList)
