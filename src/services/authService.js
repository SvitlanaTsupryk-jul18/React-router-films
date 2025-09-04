export const registerUser = (data) => {
  const alreadyRegistered = "Already exist";
  const registeredSuccess = "Congrats! You're registered!";
  let user = Object.entries(data);
  console.log("user", user);

  console.log(localStorage.getItem("name") === user[0][1]);
  if (localStorage.getItem("name") === user[0][1]) {
    return alreadyRegistered;
  } else user.forEach((item) => localStorage.setItem(item[0], item[1]));
  return registeredSuccess;
};

export const loginUser = (data) => {
  const noUser = "Register first please!";
  const wrongPassword = "Try again to enter correct password";
  const loginSuccess = "Congrats! You're logged!";
  const userLogged = { logged: false, message: "" };

  let user = Object.entries(data);
  if (localStorage.getItem("name") !== user[0][1]) {
    userLogged.message = noUser;
  } else if (localStorage.getItem("password") !== user[1][1]) {
    userLogged.message = wrongPassword;
  } else {
    userLogged.logged = true;
    userLogged.message = loginSuccess;
  }
  return userLogged;
};
