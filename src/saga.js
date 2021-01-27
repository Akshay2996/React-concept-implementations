//  api function calling
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  REQUEST_API_TOKEN,
  REQUEST_USER,
  receiveUser,
  REQUEST_ADD_USER,
  receiveAddUser,
  REQUEST_REMOVE_USER,
  receiveRemoveUser,
  REQUEST_UPDATE_USER,
  receiveUpdateUser,
} from "./redux/sagaActions";
import {
  fetchToken,
  addUserApi,
  displayUserApi,
  removeUserApi,
  updateUserApi,
} from "./api";

// Token
function* getApiToken() {
  console.log("saga is working & calling the API");
  try {
    yield call(fetchToken);
  } catch (error) {
    console.error(error);
  }
}

// Get Users
function* getUsers(action) {
  console.log("Displaying user using saga");
  try {
    const users = yield call(displayUserApi, action.offset, action.limit);
    // console.log("users are shown here" + JSON.stringify(users));
    yield put(receiveUser(users, action.offset, action.limit));
  } catch (error) {
    console.log(error);
  }
}

// Adding User
function* getAddUser(action) {
  console.log("Adding user using Saga");
  try {
    const newUser = yield call(addUserApi, action.newuser);
    console.log("NewUser: " + JSON.stringify(newUser));
    yield put(receiveAddUser(newUser));
  } catch (error) {
    console.log(error);
  }
}

// Removing user
function* getRemoveUser(action) {
  console.log("Removing the user using saga");
  try {
    yield call(removeUserApi, action.id);
    // console.log("Id of user to remove" + JSON.stringify(removeUser.userList));
    yield put(receiveRemoveUser(action.id));
  } catch (error) {
    console.log(error);
  }
}

// Updating user
function* getUpdateUser(action) {
  console.log("Updating the user using saga");
  try {
    yield call(updateUserApi, action.updateuser);
    // console.log("User is updated" + updateUser);
    yield put(receiveUpdateUser(action.updateuser));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  // console.log("saga working...");
  yield all([
    takeLatest(REQUEST_API_TOKEN, getApiToken),
    takeLatest(REQUEST_USER, getUsers),
    takeLatest(REQUEST_ADD_USER, getAddUser),
    takeLatest(REQUEST_REMOVE_USER, getRemoveUser),
    takeLatest(REQUEST_UPDATE_USER, getUpdateUser),
  ]);
}
