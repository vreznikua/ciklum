import classNames from 'classnames'
import PropTypes from 'prop-types'

import './range.scss'

function Range({
  pointPlacement = 50,
  className = '',
}) {
  return (
    <div className={classNames(
      'range',
      className,
    )}>
      <div className="range__point" style={{'--range-left': `${pointPlacement}%`}}/>
    </div>
  )
}


Range.propTypes = {
  pointPlacement: PropTypes.number,
  className: PropTypes.string,
}

export default Range