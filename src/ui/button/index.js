import classNames from 'classnames'
import PropTypes from 'prop-types'

import './button.scss'

function Button({
  primary = false,
  children = null,
  icon = null,
  submit = false,
  className = null,
  onClick = () => null,
  ...props
}) {

  const isIcon = icon && !children
  return (
    <button
      className={classNames("button", { 
        'button--primary': primary,
        'button--is-icon': isIcon,
      }, className)}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      {...props}
    >
      <span className="button__inner">
        {icon && (
          <span className={classNames({'button__icon-left': children})}>
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.element,
  submit: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button