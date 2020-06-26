import React from "react";
import {Dialogs} from "../components/Dialogs/Dialogs";
import state from "../redux/state";


export const DialogsPage = () => {
  const dialogs = state.dialogs
  const messages = state.messages
  return (
    <Dialogs dialogs={dialogs} messages={messages}/>
  )
}