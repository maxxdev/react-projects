import React, {Fragment, useContext, useEffect} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {Loader} from "../components/Loader";

export const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <h1>Home page</h1>
      <Form/>
      <hr/>
      {loading
        ? <Loader/>
        : <Notes notes={notes} onRemove={removeNote}/>
      }
    </Fragment>
  )
}