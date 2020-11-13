import PropTypes from 'prop-types'

import './link.scss'

function Link({
  href = '/',
  children,
  target,
}) {
  return (
    <a
      href={href}
      target={target}
      className="link"
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  target: PropTypes.string,
}

export default Link