import React, { useEffect } from "react";
import * as S from "./Login.styles";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUser } from "../../../use-case/user/userSlice";
import { UserApiService } from "../../../api-services/user";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    clearErrors,
    setFocus,
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const userApiService = new UserApiService();

  useEffect(() => {
    setFocus("login");
  }, [setFocus]);

  const onSubmit = async (data) => {
    const rawResponse = await userApiService.signIn(data);
    const response = await rawResponse.json();

    if (response.result === true) {
      dispatch(addUser(response.user));
    } else {
      setError("bdd", {
        type: "manual",
        message: `${response.error}`,
      });
      const timer = setTimeout(() => {
        clearErrors("bdd");
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  if (isSubmitSuccessful) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          type="text"
          placeholder="Identifiant*"
          {...register("login", {
            required: "Vous devez entrer un identifiant",
          })}
        />
        <div style={{ height: "20px" }}>
          {errors.login && (
            <span style={{ color: "lightcoral" }}>{errors.login.message}</span>
          )}
        </div>
        <S.Input
          type="password"
          placeholder="Mot de passe*"
          {...register("password", {
            required: "Vous devez entrer un mot de passe",
            minLength: {
              value: 8,
              message: "Vous devez entrer au moins 8 caractères",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Le mot de passe doit contenir au minimum une majuscule, une minuscule, un chiffre et un caractère spécial",
            },
          })}
        />
        <div style={{ height: "20px" }}>
          {errors.password && (
            <span style={{ color: "lightcoral" }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <S.Button disabled={isSubmitting}>Se connecter</S.Button>
        <div style={{ height: "20px" }}>
          {errors.bdd && (
            <span style={{ color: "lightcoral" }}>{errors.bdd.message}</span>
          )}
        </div>
      </S.Form>
    </S.Container>
  );
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addUser: function (user) {
//       dispatch({ type: "addUser", user });
//     },
//   };
// }

// export default connect(null, mapDispatchToProps)(Login);
