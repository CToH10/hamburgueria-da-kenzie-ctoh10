import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/Login";
import { LandingImages } from "../../components/Landing";
import { StyledEnterSection, StyledFormPages } from "../styles";

export const LoginPage = () => {
  return (
    <StyledFormPages>
      <LandingImages />
      <StyledEnterSection>
        <section>
          <h3>Login</h3>
        </section>
        <LoginForm />
        <section>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

          <Link to="/register">Cadastrar</Link>
        </section>
      </StyledEnterSection>
    </StyledFormPages>
  );
};
