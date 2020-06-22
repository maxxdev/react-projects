import {ADD_NOTE, REMOVE_NOTE, FETCH_NOTES, SHOW_LOADER} from "../types";

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload],
    loading: false
  }),
  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload,
    loading: false
  }),
  [REMOVE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(n => n.id !== payload)
  }),
  DEFAULT: state => state
}
export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}