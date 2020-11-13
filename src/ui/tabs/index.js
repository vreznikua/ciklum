import { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './tabs.scss'

function Tabs({
  sections = [
    {id: '', title: '', content: <div />}
  ],
}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const handleSelectTab = (index) => {
    setActiveTabIndex(index)
  }

  return (
    <div className="tabs">
      <div className="tabs__controls">
        {sections.map(({id, title}, index) => (
          <button
            key={id}
            className={classNames("tabs__control", {"tabs__control--active" : activeTabIndex === index})}
            type="button"
            onClick={() => handleSelectTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {sections[activeTabIndex].content}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.node,
  })),
}

export default Tabs