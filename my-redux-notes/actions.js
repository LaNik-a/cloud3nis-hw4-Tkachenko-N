export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";
export const LOAD_NOTES = "LOAD_NOTES";
export const SAVE_NOTES = "SAVE_NOTES";

export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SET_DETAIL_NOTE = 'SET_DETAIL_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

export const saveNotes = (notes) => ({
  type: SAVE_NOTES,
  payload: notes,
});

export const loadNotes = () => ({
  type: LOAD_NOTES,
});



export const removeNote = (note) => ({
  type: REMOVE_NOTE,
  payload: note,
});

export const editNote = (note) => ({
  type: EDIT_NOTE,
  payload: note,
});

export const setDetailNote = (note) => ({
  type: SET_DETAIL_NOTE,
  payload: note,
});