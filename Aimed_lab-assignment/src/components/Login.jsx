import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTnC, setAgreeToTnC] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LoginHeader>Login</LoginHeader>
        <InputLabel>Login ID</InputLabel>
        <Input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Enter Login ID"
          required
        />

        <InputLabel>Password</InputLabel>
        <PasswordContainer>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <ViewPassword onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            />
          </ViewPassword>
        </PasswordContainer>
        <ChangePasswordLink href="/change-password">Change Password</ChangePasswordLink>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <CheckboxLabel>Remember Me</CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={agreeToTnC}
            onChange={() => setAgreeToTnC(!agreeToTnC)}
          />
          <CheckboxLabel>
            Agree to <Link to="/terms" style={{'color': '#F78719', 'text-decoration': 'underline'}}>Terms & Conditions</Link>
          </CheckboxLabel>
        </CheckboxContainer>

        <SubmitButton type="submit">Login</SubmitButton>

        <RegistrationPara>
          Don&apos;t have an account? <Link to="/register" style={{'text-decoration': 'underline','color':'#F78719'}}>Register here</Link>.
        </RegistrationPara>
      </Form>
    </Container>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginHeader = styled.h1`
  font-family: Poppins;
  text-align: center;
  margin-top: 20px;
`;

const Form = styled.form`
  width: 40rem;
  height: 37rem;
  flex-shrink: 0;
  padding: 20px;
  border-style: hidden;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // box-shadow: -0em 0 .5em black;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
`;
const PasswordContainer = styled.div`
  position: relative;
`;

const ViewPassword = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const ChangePasswordLink = styled.a`
  margin-left: auto; /* Push to the right */
  color: #F78719;
  text-decoration: none;
`;

const EyeIcon = styled.i`
  font-size: 16px;
  color: #555;
`;

const InputLabel = styled.label`
  margin-top: 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  margin: 0;
  color: #737B86;
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 110%
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const SubmitButton = styled.button`
  background-color: #1575A7;
  width: 33rem;
  height: 3.5rem;
  flex-shrink: 0;
  align-self: center;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const RegistrationPara = styled.p`
  margin-top: 15px;
  align-self: center;
`;
