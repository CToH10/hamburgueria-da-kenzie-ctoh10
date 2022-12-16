import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter 6 caracteres"),
  confirmPassword: yup
    .string()
    .test("passwordMatches", "Senhas precisam ser iguais", function (value) {
      return this.parent.password === value;
    }),
});
