import { EDIT_NOTE } from "../actions";

const initState = {
  note: {
    name: "",
    title: "",
    description: "",
    link: "",
    key: "",
  },
};
const editNote = (state = initState, action) => {
  switch (action.type) {
    case EDIT_NOTE: {
      return { note: action.payload };
    }
    default:
      return state;
  }
};

export default editNote;
