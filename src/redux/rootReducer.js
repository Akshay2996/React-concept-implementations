const initState = {
  users: [],
};

const rootReducer = function users(state = initState, action) {
  switch (action.type) {
    case "RECEIVE_USER":
      return { users: action.users };
    case "RECEIVE_REMOVE_USER":
      return { users: state.users.filter((user) => user.id !== action.id) };
    case "RECEIVE_ADD_USER":
      return { users: [...state.users, action.users] };
    case "RECEIVE_UPDATE_USER":
      const oldUsers = state.users.filter(
        (user) => user.id !== action.updateuser.id
      );
      const newUsers = [...oldUsers, action.updateuser];
      console.log(newUsers);
      // Sorting function -> Updated user comes first
      newUsers.sort(function (a, b) {
        return b.id - a.id;
      });
      return { users: newUsers };
    default:
      return state;
  }
};

export default rootReducer;
