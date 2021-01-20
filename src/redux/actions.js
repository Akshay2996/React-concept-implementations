// Requesting Token
export function requestApiToken(token) {
  return {
    type: "REQUEST_API_TOKEN",
  };
}

// removeUser

export function removeUser(id) {
  return {
    type: "REMOVE_USER",
    id: id,
  };
}

// addUser

export function addUser(newuser) {
  return {
    type: "ADD_USER",
    newuser: newuser,
  };
}

// updateUser

export function updateUser(updateuser) {
  return {
    type: "UPDATE_USER",
    updateuser: updateuser,
  };
}
