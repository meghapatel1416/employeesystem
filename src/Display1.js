import React, { useState } from 'react'
import Display2 from './Display2'

export default function Display1() {

  const [data,setdata] = useState({
        firstName : "weltec",
        lastName : "institute"
    })
  return (
    <Display2 d={data}>Display1</Display2>
  )
}