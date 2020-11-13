import React from 'react'

import Button from './index'

function EditIcon() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon">
      <path d="M9.65953 2.142L5.94994 0L0.59494 9.27459L0.340057 14L4.30453 11.417L9.65953 2.142ZM8.48929 2.45535L8.06106 3.19694L5.83464 1.91182L6.26329 1.16982L8.48929 2.45535ZM6.14841 3.08247L2.07894 10.1315L1.33694 9.70282L5.406 2.65424L6.14841 3.08247ZM1.29288 12.3496L1.38635 10.7211L2.65665 11.4545L1.29288 12.3496ZM3.56294 10.9888L2.82094 10.5601L6.89 3.51112L7.63241 3.93935L3.56294 10.9888Z" fill="#555555"/>
    </svg> 
  )
}

const DefaultButton = {
  title: 'Button',
  component: Button,
}

export default DefaultButton
const Template = (args) => <Button {...args}></Button>

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: 'Button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <EditIcon />,
  children: 'Button',
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  icon: <EditIcon />,
}
