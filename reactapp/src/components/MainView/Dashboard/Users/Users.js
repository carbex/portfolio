import React, { useState, useEffect, useCallback } from "react";
import { useModal } from "../../../GlobalModal/GlobalModal";
import { dynamicSort } from "../../../Functions/Functions";
import { UsersTable } from "./UsersTable";
import { UsersHeader } from "./UsersHeader";
import { UserApiService } from "../../../../api-services/user";

export function Users() {
  const { setModal, unSetModal } = useModal();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isIdAscendant, setIsIdAscendant] = useState(false);
  const [isEmailAscendant, setIsEmailAscendant] = useState(false);
  const [isSmallerThan350, setIsSmallerThan350] = useState(false);

  const userApiService = new UserApiService();

  const loadUsers = useCallback(async () => {
    let rawResponse = await userApiService.getUsers();
    let response = await rawResponse.json();
    response.result
      ? setUsers(
          response.users
            .map((user) => {
              return { ...user, visible: false };
            })
            .sort(dynamicSort("login"))
        )
      : alert(`${response.error}`);
  }, []);

  // LOAD USERS
  useEffect(() => {
    loadUsers();
    setLoading(false);
  }, [loadUsers]);

  // TIMEOUT ON MESSAGE DISPLAYING
  const closeMessage = async () => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  };

  // CLOSE FOOTER PROJECTS WHEN SCREEN > 650
  useEffect(() => {
    const updateWindowWidth = () => {
      const breakPoint = 650;
      if (window.innerWidth > breakPoint) {
        setIsSmallerThan350(false);
        setUsers(
          users.map((user) => {
            return { ...user, visible: false };
          })
        );
      } else {
        setIsSmallerThan350(true);
      }
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [users]);

  // ADD ONE USER
  const handleAddUserSubmit = async (login, password, confirmPassword) => {
    const rawResponse = await userApiService.addUser({
      login,
      password,
      confirmPassword,
    });
    let response = await rawResponse.json();
    if (response.result) {
      loadUsers();
      unSetModal();
      setMessage(
        <span style={{ color: "lightgreen" }}>{response.success}</span>
      );
      closeMessage();
    } else {
      unSetModal();
      setMessage(<span style={{ color: "lightcoral" }}>{response.error}</span>);
      closeMessage();
    }
  };

  // UPDATE ONE USER
  const handleUpdateUserSubmit = async (
    token,
    login,
    password,
    newPassword,
    confirmNewPassword,
    firstName,
    lastName,
    email,
    role
  ) => {
    const rawResponse = await userApiService.updateUser({
      token,
      login,
      password,
      newPassword,
      confirmNewPassword,
      firstName,
      lastName,
      email,
      role,
    });
    let response = await rawResponse.json();
    if (response.result) {
      loadUsers();
      unSetModal();
      setMessage(
        <span style={{ color: "lightgreen" }}>{response.success}</span>
      );
      closeMessage();
    } else {
      unSetModal();
      setMessage(<span style={{ color: "lightcoral" }}>{response.error}</span>);
      closeMessage();
    }
  };

  // DELETE ONE USER
  const handleDeleteUserSubmit = async (id) => {
    const rawResponse = await userApiService.deleteUser(id);
    let response = await rawResponse.json();
    if (response.result) {
      loadUsers();
      unSetModal();
      setMessage(
        <span style={{ color: "lightgreen" }}>{response.success}</span>
      );
      closeMessage();
    } else {
      unSetModal();
      setMessage(<span style={{ color: "lightcoral" }}>{response.error}</span>);
      closeMessage();
    }
  };

  // DISPLAY THE FOOTER OF EACH USER WHEN SCREEN < 650
  const handleUserDropdownClick = (index) => {
    setUsers(
      users.map((user, i) => {
        if (i === index) {
          if (user.visible === false) {
            return { ...user, visible: true };
          } else {
            return { ...user, visible: false };
          }
        } else {
          return { ...user };
        }
      })
    );
  };

  // SORT USERS BY LOGIN
  const handleIdDropdownClick = () => {
    if (isIdAscendant) {
      setUsers([...users.sort(dynamicSort("login"))]);
    } else {
      setUsers([...users.sort(dynamicSort("login")).reverse()]);
    }
    setIsIdAscendant(() => !isIdAscendant);
  };

  // SORT USERS BY EMAIL
  const handleEmailDropdownClick = () => {
    if (isEmailAscendant) {
      setUsers([...users.sort(dynamicSort("email"))]);
    } else {
      setUsers([...users.sort(dynamicSort("email")).reverse()]);
    }
    setIsEmailAscendant(() => !isEmailAscendant);
  };

  return (
    <>
      <UsersHeader
        users={users}
        message={message}
        setModal={setModal}
        unSetModal={unSetModal}
        handleAddUserSubmit={handleAddUserSubmit}
      />
      <UsersTable
        isSmallerThan350={isSmallerThan350}
        loading={loading}
        isIdAscendant={isIdAscendant}
        isEmailAscendant={isEmailAscendant}
        users={users}
        setModal={setModal}
        unSetModal={unSetModal}
        handleUserDropdownClick={handleUserDropdownClick}
        handleIdDropdownClick={handleIdDropdownClick}
        handleEmailDropdownClick={handleEmailDropdownClick}
        handleUpdateUserSubmit={handleUpdateUserSubmit}
        handleDeleteUserSubmit={handleDeleteUserSubmit}
      />
    </>
  );
}
