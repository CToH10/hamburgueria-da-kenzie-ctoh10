import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iLoginBody, UserContext } from "../../../Contexts/UserContext";
import { useContext } from "react";
import { StyledForm } from "../style";
import { StyledButton } from "../../Button/style";

export const LoginForm = () => {
  const { LoginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginBody>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<iLoginBody> = (data) => LoginUser(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Seu email aqui"
          id="email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Sua senha aqui"
          id="password"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </fieldset>

      <StyledButton type="submit" className="login">
        Logar
      </StyledButton>
    </StyledForm>
  );
};
