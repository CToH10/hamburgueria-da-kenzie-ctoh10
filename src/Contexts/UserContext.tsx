import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iUserContext {
  user: string | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  RegisterUser: (body: iRegisterBody) => void;
  LoginUser: (body: iLoginBody) => void;
}

interface iUserContextProps {
  children: React.ReactNode;
}

export type iLoginBody = {
  email: string;
  password: string;
};

export interface iRegisterBody extends iLoginBody {
  name: string;
}

export interface iDefaultError {
  response: {
    data: string;
  };
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<string | null | undefined>(
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  async function RegisterUser(body: iRegisterBody) {
    try {
      let registerProcess = await api.post("/users", body);
      if (registerProcess.data.accessToken) {
        window.localStorage.setItem("token", registerProcess.data.accessToken);
        window.localStorage.setItem("userID", registerProcess.data.user.id);
        setUser(registerProcess.data.accessToken);
        toast.success("Cadastro realizado");
        navigate("/dashboard");
      }
    } catch (error) {
      const registerError = error as AxiosError<iDefaultError>;
      let message = registerError.response?.data;
      toast.error(`${message}`);
    }
  }

  async function LoginUser(body: iLoginBody) {
    try {
      let loginProcess = await api.post("/login", body);

      if (loginProcess.data.accessToken) {
        window.localStorage.setItem("token", loginProcess.data.accessToken);
        window.localStorage.setItem("userID", loginProcess.data.user.id);
        setUser(loginProcess.data.accessToken);
        toast.success("Login realizado");
        navigate("/dashboard");
      }
    } catch (error) {
      const loginError = error as AxiosError<iDefaultError>;
      let message = loginError.response?.data;
      toast.error(`${message}`);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, RegisterUser, LoginUser }}>
      {children}
    </UserContext.Provider>
  );
};
