import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

const WelcomeContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

const HeroBanner = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-image: url("./images/heroBanner.jpeg");
  background-position: center;
  background-repeat: no-repeat;
`;

const AuthFormContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`;

const FitnessText = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const Welcome: React.FC = () => {
  const { login } = useContext(AuthContext);

  return (
    <WelcomeContainer>
      <HeroBanner></HeroBanner>
      <AuthFormContainer>
        <FitnessText variant="h4">Your Fitness Journey Starts Here</FitnessText>
        <StyledButton variant="outlined" color="primary" onClick={login}>
          Login
        </StyledButton>
      </AuthFormContainer>
    </WelcomeContainer>
  );
};
