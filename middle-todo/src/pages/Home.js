import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Home = () => {
  const {loading, notes, fetchNotes} = useContext(FirebaseContext)
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <h1>Home page</h1>
      <Form/>
      <hr/>
      <Notes notes={notes}/>
    </Fragment>
  )
}