import { SET_DETAIL_NOTE } from "../actions";

const initState = {
  note: {
    name: "",
    title: "",
    description: "",
    link: "",
    key: "",
  },
};

const noteDetail = (state = initState, action) => {
  switch (action.type) {
    case SET_DETAIL_NOTE: {
      return { note: action.payload };
    }
    default:
      return state;
  }
};

export default noteDetail;
