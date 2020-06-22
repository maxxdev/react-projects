import React from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}