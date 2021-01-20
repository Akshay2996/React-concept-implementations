const initState = {
  users: [
    {
      id: 0,
      firstName: "Akshay",
      lastName: "Sharma",
      role: "Developer",
      country: "India",
    },
    {
      id: 1,
      firstName: "Anish",
      lastName: "Kaushal",
      role: "Developer",
      country: "India",
    },
    {
      id: 2,
      firstName: "Seema",
      lastName: "Devi",
      role: "Developer",
      country: "India",
    },
  ],
};

const rootReducer = function users(state = initState, action) {
  switch (action.type) {
    case 'REQUEST_API_TOKEN':
      return 
    case "REMOVE_USER":
      return { users: state.users.filter((user) => user.id !== action.id) };
    case "ADD_USER":
      return { users: [...state.users, action.newuser] };
    case "UPDATE_USER":
      const oldUsers = state.users.filter(
        (user) => user.id !== action.updateuser.id
      );
      const newUsers = [...oldUsers, action.updateuser];
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
