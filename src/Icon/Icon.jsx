import React from 'react'
import sprite from './sprite.svg'

const Icon = ({ id, value, svgClass }) => {
  return (
    <svg viewBox="0 0 24 24" className={`${svgClass} ${value}`}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}

export default Icon
