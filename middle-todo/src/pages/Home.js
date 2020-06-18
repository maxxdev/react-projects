import React, {Fragment} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({id: i, title: 'Note'}))

  return (
    <Fragment>
      <h1>Home page</h1>
      <Form/>
      <hr/>
      <Notes notes={notes}/>
    </Fragment>
  )
}