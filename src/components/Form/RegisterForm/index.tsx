import { useForm, SubmitHandler } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iRegisterBody, UserContext } from "../../../Contexts/UserContext";
import { useContext } from "react";
import { StyledForm } from "../style";
import { StyledButton } from "../../Button/style";

interface iRegister extends iRegisterBody {
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { RegisterUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iRegister> = (data) => {
    const { confirmPassword, ...body } = data;
    RegisterUser(body);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            id="name"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </fieldset>
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
        <fieldset>
          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            type="password"
            placeholder="Confirme a senha"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword.message}</p>
          )}
        </fieldset>

        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
    </>
  );
};
