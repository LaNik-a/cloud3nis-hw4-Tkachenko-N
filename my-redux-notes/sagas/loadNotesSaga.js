import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD_NOTES, setNotes } from "../actions";
import { getNotes } from "../api/api";

export function* loadNotesWatcher() {
  yield takeLatest(LOAD_NOTES, loadNotesFlow);
}

function* loadNotesFlow() {
  const notes = yield call(getNotes);
  yield put(setNotes(notes));
}