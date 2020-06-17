import React, {useState} from "react";
import PropTypes from 'prop-types'
import TodoList from "./TodoList";

function AddTodo({onCreate}) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
    }
  }

  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
      <input type="text"
             value={value}
             onChange={event => setValue(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )

}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}


export default AddTodo