import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from './Components/Sidebar'

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true })

const setUp = (props = {}) => {
  let component = shallow(<Sidebar {...props} />)
  return component
}

describe('Sidebar testing ', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Sidebar render', () => {
    const f = component.find('.sidebar')
    console.log(component.debug())
    expect(f.length).toBe(1)
  })
})
