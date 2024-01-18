import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { DEC, INC } from './counteraction';
export default function MyCounter() {

   const data = useSelector(y=>y);

   const dis = useDispatch();

   const incre = ()=>{

    dis(INC())
   }

   const dere = ()=>{
    dis(DEC())

   }
  return (
    <div>{data}
    
        <button onClick={incre}>+</button>
        <button onClick={dere}>-</button>
    </div>
  )
}