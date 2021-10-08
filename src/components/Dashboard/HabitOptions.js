import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

const HabitOptions = ({name}) => {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.habits)

  return (
    <>
      {name}
      <span className='editButtons'>
        
        <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip id={'edit'}>Edit</Tooltip>
          }
        >
          <Button><BsFillPencilFill /></Button>
        </OverlayTrigger>
        
        <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip id={'delete'}>Delete</Tooltip>
          }
        >
          <Button><BsFillTrashFill /></Button>
        </OverlayTrigger>
        
      </span>
    </>
    )
}

export default HabitOptions