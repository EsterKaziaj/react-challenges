import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { AllWorkouts } from "./components/AllWorkouts";
import { AddNewWorkout } from "./components/AddNewWorkout";
import { useContext } from "react";
import { AuthContext } from "./context/auth";

const App: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <AllWorkouts /> : <Welcome />} />
        <Route path="/all-workouts" element={<AllWorkouts />} />
        <Route path="/add-new-workout" element={<AddNewWorkout />} />
      </Routes>
    </>
  );
};

export default App;
