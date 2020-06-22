import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Notes = ({notes, onRemove}) => {
  const alert = useContext(AlertContext)
  const removeItem = (id) => {
    onRemove(id).then(() => {
      alert.show('Note has removed', 'success')
    })
  }
  return (
    <ul className="list-group">
      {notes.map(note => (
        <li className="list-group-item note"
            key={note.id}
        >
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button type="button"
                  onClick={() => removeItem(note.id)}
                  className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
      ))}
    </ul>
  )
}