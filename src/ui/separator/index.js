import classNames from 'classnames'
import PropTypes from 'prop-types'

import './separator.scss'

function Separator ({
  horizontal = false,
  className = '',
}) {
  return (
    <div className={classNames(
      'separator', {
        'separator--vertical': !horizontal, 
        'separator--horizontal': horizontal
      },
      className,
    )}/>
  )
}

Separator.propTypes = {
  horizontal: PropTypes.bool,
  className: PropTypes.string,
}

export default Separator