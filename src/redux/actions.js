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