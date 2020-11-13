import React from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'

import './text.scss'

function Text({
  tagName = 'span',
  children = null,
  color = '',
  caption = false,
}) {
  return React.createElement(
    tagName,
    {
      className: classNames(
        {[`text--${color}`] : color},
        {[`text--caption`]: caption}
      )
    },
    children,
  )
}

Text.propTypes = {
  tagName: PropTypes.string, 
  children: PropTypes.node,
  color: PropTypes.oneOf(['red', 'green', 'grey']),
  caption: PropTypes.bool,
}

export default Text