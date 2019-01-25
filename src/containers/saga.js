import { takeLatest, put } from "redux-saga/effects";

function ApiCall() {
  return new Promise(function(resolve) {
    fetch("http://local.bbbyapp.com/apis/stateless/v1.0/content/registry-types")
      .then(response => response.json())
      .then(json => resolve(json));
  });
}

function* ExecuteAction(action) {
  const data = yield ApiCall();
  yield put({ type: "SET_DATA_FROM_API", value: data });
}

export function* CatchAction() {
  yield takeLatest("GET_DATA_ASYNC",  ExecuteAction);
}
