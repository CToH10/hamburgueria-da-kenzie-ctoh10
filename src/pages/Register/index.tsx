import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { LandingImages } from "../../components/Landing";
import { StyledEnterSection, StyledFormPages } from "../styles";

export const RegisterPage = () => {
  return (
    <StyledFormPages>
      <LandingImages />
      <StyledEnterSection>
        <section>
          <h3>Cadastro</h3>
          <Link to="/login">Retornar para o login</Link>
        </section>
        <RegisterForm />
      </StyledEnterSection>
    </StyledFormPages>
  );
};
