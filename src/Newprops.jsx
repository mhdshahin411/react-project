import React from 'react'
import Newprops2 from './Newprops2'

function Newprops() {
    const image="https://i.ytimg.com/vi/XkT6EO5wRpU/maxresdefault.jpg"

  return (
  <div className='d-flex'>

    <Newprops2  name="shahin" age="23" maritialStatus="single" Number="8113003220" img={image}
    />
    <Newprops2  name="waseem" age="23" maritialStatus="single" Number="8113003220" img={image}
    />
    <Newprops2  name="jusair" age="23" maritialStatus="single" Number="8113003220" img={image}
    />
    <Newprops2  name="safa" age="23" maritialStatus="single" Number="8113003220" img={image}
    />
  </div>
  )
}

export default Newprops