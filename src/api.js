import axios from "axios";

// fetchtoken function
export const fetchToken = () => {
  const config = {
    url: "http://localhost:5000/api/user/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then((res) => {
    // console.log(res.data);
    localStorage.setItem("token", res.data.token);
    return res.data.token;
  });
};

// displayUser function
export const displayUserApi = (offset, limit) => {
  const token = localStorage.getItem("token");
  //   console.log("Token for user is printed here: " + token);
  console.log("Api Offset & limit: " + offset, limit);
  const config = {
    url: "http://localhost:5000/api/user",
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    data: {
      offset: offset,
      limit: limit,
    },
  };
  return axios(config)
    .then((response) => {
      console.table("Data from backend" + JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => console.log(error));
};

// addUser function
export const addUserApi = (newuser) => {
  const { firstName, lastName, role, country } = newuser;
  const token = localStorage.getItem("token");
  const config = {
    url: "http://localhost:5000/api/user/create",
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      role: role,
      country: country,
    },
  };

  return axios(config)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// removeUser function
export const removeUserApi = (id) => {
  const token = localStorage.getItem("token");
  const config = {
    url: `http://localhost:5000/api/user/${id}`,
    method: "DELETE",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  };
  return axios(config).then((response) => {
    // console.log(response.data);
    // console.log(response.data.userList);
    return response.data.userList;
  });
};

// updateUser function
export const updateUserApi = (updateuser) => {
  const token = localStorage.getItem("token");
  const { id, firstName, lastName, role, country } = updateuser;
  const config = {
    url: `http://localhost:5000/api/user/${id}`,
    method: "PUT",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      role: role,
      country: country,
    },
  };
  return axios(config)
    .then((response) => {
      //   props.history.push("/user");
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
