import classNames from 'classnames'
import PropTypes from 'prop-types'

import './checkbox.scss'

function Icon({className = ''}) {
  return (
    <svg className={className} viewBox="0 0 17 18">
      <defs/>
      <g filter="url(#filter0_d)">
        <path stroke="#fff" strokeWidth="1.5" d="M5 5l3.2667 3L12 1"/>
      </g>
      <defs>
        <filter id="filter0_d" width="16.1691" height="16.5604" x=".4927" y=".647" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/><feGaussianBlur stdDeviation="2"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  )}


function Checkbox({
  id = '',
  disabled = false, 
  onChange = () => null,
  checked = false,
}) {
  return (
    <label
      className={classNames(
        'checkbox',
        disabled && 'checkbox--disabled',
        checked && 'checkbox--checked',
      )}
    >
      <input
        onChange={onChange}
        type="checkbox"
        id={id}
        checked={checked}
        className="checkbox__input"
        disabled={disabled}
      />
      <span className="checkbox__mark">
        <Icon className="checkbox__icon"/>
      </span>  
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool, 
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

export default Checkbox