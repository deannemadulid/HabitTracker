import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { addNewHabit } from './habitsReducer'
import { useSelector, useDispatch } from 'react-redux'


const AddHabit = () => {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.habits)
  
  const [show, setShow] = useState(false);
  const [newHabit, setNewHabit] = useState("")
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addHabit = (event) => {
    event.preventDefault()

    // habitsStore.dispatch(addNewHabit(newHabit))
    dispatch(addNewHabit(newHabit))
    console.log(habits)
    // add to db
    setNewHabit("")
    handleClose()
  }

  return (
    <>
      <Button onClick={handleShow}>
        Add habit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new habit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={addHabit}>
            <Form.Label>Habit name</Form.Label>
            <Form.Control type="text" placeholder="Exercise for 30 mins" 
              onChange={e => setNewHabit(e.target.value)} />
            
            <Modal.Footer>
              <Button onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" onClick={addHabit}>
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  
  )
}

export default AddHabit
