// Requesting Token
export function requestApiToken() {
  return {
    type: "REQUEST_API_TOKEN",
  };
}

// removeUser

export function removeUser(id) {
  return {
    type: "REQUEST_REMOVE_USER",
    id: id,
  };
}

// addUser

export function addUser(newuser) {
  return {
    type: "REQUEST_ADD_USER",
    newuser: newuser,
  };
}

// updateUser

export function updateUser(updateuser) {
  return {
    type: "REQUEST_UPDATE_USER",
    updateuser: updateuser,
  };
}

// Display User data
export function displayUserData() {
  return {
    type: "REQUEST_USER",
  };
}
