import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => {
  const alert = useContext(AlertContext)
  const removeItem = (id) => {
    onRemove(id).then(() => {
      alert.show('Note has removed', 'success')
    })
  }
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={
            {enter: 1000, exit: 350}
          }
        >
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button type="button"
                    onClick={() => removeItem(note.id)}
                    className="btn btn-outline-danger btn-sm">&times;</button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>

  )
}