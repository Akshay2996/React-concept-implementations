const initState = {
  users: [
    {
      id: 0,
      name: "Akshay Sharma",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    },
    {
      id: 1,
      name: "Anish Kaushal",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    },
    {
      id: 2,
      name: "Seema Devi",
      imageLink:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return state;
    case "ADD_USER":
      return state;
    case "UPDATE_USER":
      return state;
    default:
      return state;
  }
};

export default rootReducer;
