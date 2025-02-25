import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import {
  Add as AddIcon,
  FitnessCenter as FitnessCenterIcon,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

export const Navbar: React.FC = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          <Link
            to="/all-workouts"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FitnessCenterIcon fontSize="large" />
          </Link>
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          component={Link}
          to="/add-new-workout"
        >
          <AddIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" onClick={handleLogout} edge="end">
          Logout
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};
