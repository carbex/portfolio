export class UserApiService {
  signIn = (data) =>
    fetch("/users/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `login=${data.login}&password=${data.password}`,
    });

  getUsers = () => fetch("/users/get");

  addUser = ({ login, password, confirmPassword }) =>
    fetch("/users/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `login=${login}&password=${password}&confirmPassword=${confirmPassword}`,
    });

  updateUser = ({
    token,
    login,
    password,
    newPassword,
    confirmNewPassword,
    firstName,
    lastName,
    email,
    role,
  }) =>
    fetch(`/users/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${token}&login=${login}&password=${password}&newPassword=${newPassword}&confirmNewPassword=${confirmNewPassword}&firstName=${firstName}&lastName=${lastName}&email=${email}&role=${role}`,
    });

  deleteUser = (id) =>
    fetch(`/users/delete/${id}`, {
      method: "DELETE",
    });
}
