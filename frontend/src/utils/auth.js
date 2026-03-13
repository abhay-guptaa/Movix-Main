export const saveUser = (user) => {
  localStorage.setItem("movixUser", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("movixUser"));
};

export const logoutUser = () => {
  localStorage.removeItem("movixUser");
};