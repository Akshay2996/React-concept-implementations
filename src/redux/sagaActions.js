// Declaring action type in form of variables
export const REQUEST_API_TOKEN = "REQUEST_API_TOKEN";
export const RECEIVE_API_TOKEN = "RECEIVE_API_TOKEN";
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const REQUEST_ADD_USER = "REQUEST_ADD_USER";
export const RECEIVE_ADD_USER = "RECEIVE_ADD_USER";
export const REQUEST_REMOVE_USER = "REQUEST_REMOVE_USER";
export const RECEIVE_REMOVE_USER = "RECEIVE_REMOVE_USER";
export const REQUEST_UPDATE_USER = "REQUEST_UPDATE_USER";
export const RECEIVE_UPDATE_USER = "RECEIVE_UPDATE_USER";

// Receive token here
export const receiveApiToken = (token) => {
  return {
    type: RECEIVE_API_TOKEN,
    token: token,
  };
};

// Receive User here
export const receiveUser = (users) => {
  console.log("It working here...");
  return {
    type: RECEIVE_USER,
    users: users,
  };
};

// Receive Added user here
export const receiveAddUser = (adduser) => {
  return { type: RECEIVE_ADD_USER, users: adduser };
};

// Receive the removed user with id here
export const receiveRemoveUser = (id) => {
  return { type: RECEIVE_REMOVE_USER, id: id };
};

// Receive Updated user here
export const receiveUpdateUser = (users) => {
  return { type: RECEIVE_UPDATE_USER, updateuser: users };
};
