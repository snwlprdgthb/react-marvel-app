import React from 'react'

const Comics = ({ title, pic }) => {
  return (
    <div className="comics-item">
      <img src={`${pic}.jpg`} alt="comics" className="comics-item-img" />
      <h3 className="comics-item-name">{title}</h3>
    </div>
  )
}

export default Comics
