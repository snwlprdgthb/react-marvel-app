import React, { Component } from 'react'
import Icon from '../Icon/Icon'

class Item extends Component {
  render() {
    const { item, getComics, getEvents, getStories, getSeries } = this.props
    return (
      <div className="item">
        <img
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          alt="heroes"
          className="item-img"
        />
        <h3 className="item-name">{item.name}</h3>

        <div className="item-comics" onClick={getComics}>
          <Icon svgClass={'item-icon'} id={'icon-angle-right'} />
          <p>Comics</p>
        </div>
        <div className="item-events" onClick={getEvents}>
          <Icon svgClass={'item-icon'} id={'icon-angle-right'} />
          <p>Events</p>
        </div>
        <div className="item-stories" onClick={getStories}>
          <Icon svgClass={'item-icon'} id={'icon-angle-right'} />
          <p>Stories</p>
        </div>
        <div className="item-series" onClick={getSeries}>
          <Icon svgClass={'item-icon'} id={'icon-angle-right'} />
          <p>Series</p>
        </div>
      </div>
    )
  }
}

export default Item
