import classNames from 'classnames'
import PropTypes from 'prop-types'

import './chip.scss'

function Chip({children, color = 'grey'}) {
  return (
    <div className={
      classNames(
        "chip",
        {[`chip--${color}`]: color}
      )
    }>
      {children}
    </div>
  )
}

Chip.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['grey', 'orange', 'light-green', 'dark-green', 'red', 'dark-red']),
}

export default Chip