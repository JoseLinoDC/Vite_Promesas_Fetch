import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const onChange = (value, campo) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChange,
  };
};