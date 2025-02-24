import { useReducer, useEffect } from "react";

//FIC: Estado inicial
const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

//FIC: Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
      break;

    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "MITOKEN25042002",
        username,
        nombre,
      };
      break;

    default:
      return state;
      break;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  //FIC: useEffect
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2500);
  }, []);

  //FIC: condicion para validar el estado
  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-primary">Validando Información...</div>
      </>
    );
  }

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        username: "Jose Dìaz",
        nombre: "Lino",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
      payload: {
        username: "",
        nombre: "",
      },
    });
  };

  return (
    <>
      <h3>Login</h3>
      {!state.token ? (
        <div className="alert alert-danger">No Autenticado...</div>
      ) : (
        <div className="alert alert-success">
          Autenticado como {state.username}
        </div>
      )}

      {!state.token ? (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      ) : (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
};
