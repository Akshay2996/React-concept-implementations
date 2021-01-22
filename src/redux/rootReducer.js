const initState = {
  users: [],
  count: 0,
};

const rootReducer = function users(state = initState, action) {
  switch (action.type) {
    case "RECEIVE_USER":
      // console.log(action.count);
      return { users: action.users, count: action.count };
    case "RECEIVE_REMOVE_USER":
      return { users: state.users.filter((user) => user.id !== action.id) };
    case "RECEIVE_ADD_USER":
      const allUsers = [...state.users, action.users];
      allUsers.sort(function (a, b) {
        return b.id - a.id;
      });
      return { users: allUsers };
    case "RECEIVE_UPDATE_USER":
      const oldUsers = state.users.filter(
        (user) => user.id !== action.updateuser.id
      );
      const newUsers = [...oldUsers, action.updateuser];
      // console.log(newUsers);
      // Sorting function -> Updated user comes first
      newUsers.sort(function (a, b) {
        return b.id - a.id;
      });
      return { users: newUsers, count: action.newUsers.count };
    default:
      return state;
  }
};

export default rootReducer;
