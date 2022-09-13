import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'

function Shop() {
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <>
    <div className='container'>
        <h4 className='mx-2'>Deposit/Withdraw Money</h4>
    {/* Without Using bindActionCreators */}
    {/* <button type="button" className="btn btn-primary mx-2 " onClick={()=>{dispatch(actionCreators.withdrawMoney(50))}}>-</button>
        Update Balance
    <button type="button" className="btn btn-primary mx-2 " onClick={()=>{dispatch(actionCreators.depositMoney(200))}}>+</button> */}


    <button type="button" className="btn btn-primary mx-2 " onClick={()=>{withdrawMoney(50)}}>-</button>
        Update Balance
    <button type="button" className="btn btn-primary mx-2 " onClick={()=>{depositMoney(200)}}>+</button>


    </div>
    </>
  )
}

export default Shop