import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SET_NOTES } from "../actions";

const initState = {
  notes: [],
};

const content = (state = initState, action) => {
  switch (action.type) {
    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }
    case ADD_NOTE: {
      return { ...state, notes: [action.payload, ...state.notes] };
    }
    case EDIT_NOTE: {
      let note = action.payload;
      state.notes.map((elem) => {
        if (elem.key === note.key) {
          elem.name = note.name;
          elem.title = note.title;
          elem.description = note.description;
        } else return elem;
      });
      return { ...state, notes: [...state.notes] };
    }
    case REMOVE_NOTE: {
      state.notes.splice(state.notes.indexOf(action.payload), 1);
      return { ...state, notes: [...state.notes] };
    }
    default:
      return state;
  }
};

export default content;
