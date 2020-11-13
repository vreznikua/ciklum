import { render, screen } from '@testing-library/react'
import Button from './'

function EditIcon() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon">
      <path d="M9.65953 2.142L5.94994 0L0.59494 9.27459L0.340057 14L4.30453 11.417L9.65953 2.142ZM8.48929 2.45535L8.06106 3.19694L5.83464 1.91182L6.26329 1.16982L8.48929 2.45535ZM6.14841 3.08247L2.07894 10.1315L1.33694 9.70282L5.406 2.65424L6.14841 3.08247ZM1.29288 12.3496L1.38635 10.7211L2.65665 11.4545L1.29288 12.3496ZM3.56294 10.9888L2.82094 10.5601L6.89 3.51112L7.63241 3.93935L3.56294 10.9888Z" fill="#555555"/>
    </svg> 
  )
}

const TestButton = (props) => {
  return <Button data-testid="button" {...props} />
}

test('Load Default Button', () => {
  render(<TestButton>Default</TestButton>)
  const { className } = screen.getByTestId('button')
  expect(className).toEqual('button')
})

test('Load Primary Button', () => {
  render(<TestButton primary>Default</TestButton>)
  const { className } = screen.getByTestId('button')
  expect(className).toEqual('button button--primary')
})

test('Load Submit Button', () => {
  render(<TestButton type="submit">Default</TestButton>)
  const { type } = screen.getByTestId('button')
  expect(type).toEqual('submit')
})

test('Load Button with Text and Icon', () => {
  render(<TestButton icon={<EditIcon />}>Default</TestButton>)
  const { parentElement: { className }} = screen.getByTestId('icon')
  expect(className).toEqual('button__icon-left')
})

test('Load Button with Icon Only', () => {
  render(<TestButton icon={<EditIcon />}/>)
  const { className } = screen.getByTestId('button')
  expect(className).toEqual('button button--is-icon')
})