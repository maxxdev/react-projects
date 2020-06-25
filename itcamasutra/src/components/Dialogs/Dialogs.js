import React from "react";
import {NavLink} from "react-router-dom";
import state from "../../redux/state";

const DialogItem = ({dialog}) => {
  return (
    <NavLink
      className="nav-link"
      to={"/dialog/" + dialog.id}
      exact
    >{dialog.name}</NavLink>
  )
}

const MessageItem = ({message}) => {
  return (
    <div>
      <p className="card-text mb-auto">{message.message}</p>
      <div className="mb-1 text-muted">Likes: {message.likesCount}</div>
    </div>

  )
}

export const Dialogs = () => {

  const dialogs = state.dialogs
  const messages = state.messages

  return (
    <div className="row">
      <div className="col-md-3">
        <h4>Names</h4>
        <ul>
          {
            dialogs.map(dialog => {
              return <li key={dialog.id}>
                <DialogItem dialog={dialog}/>
              </li>
            })
          }
        </ul>
      </div>
      <div className="col-md-9">
        <h4>Messages</h4>
        {
          messages.map(message => {
            return <div className="row" key={message.id}>
              <MessageItem message={message}/>
            </div>
          })
        }
      </div>
    </div>
  )
}