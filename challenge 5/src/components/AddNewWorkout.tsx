// AddNewWorkout.tsx
import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Intensity, IntensityString, WorkoutTypeName } from "../types";
import { useWorkoutTypes } from "../hooks/useWorkoutTypes";
import { useNavigate } from "react-router-dom";
import { firebase } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AuthContext } from "../context/auth";

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding-top: 200px;
`;

export const AddNewWorkout: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState<IntensityString>("Low");
  const { workoutTypes, workoutTypeNames } = useWorkoutTypes();
  const navigate = useNavigate();

  const handleAddWorkout = async () => {
    if (user) {
      try {
        const newWorkout = {
          type: workoutType,
          intensity: intensity,
          duration: duration,
          userId: user?.uid,
        };
        await addDoc(collection(firebase, "workouts"), newWorkout);
        navigate("/all-workouts");
      } catch (error) {
        console.error("Error adding a workout", error);
      }
    }
  };

  return (
    <Form>
      <FormControl fullWidth required>
        <InputLabel>Exercise Type</InputLabel>
        <Select
          fullWidth
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value as string)}
        >
          {workoutTypes &&
            workoutTypeNames.map((name: WorkoutTypeName) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <TextField
          fullWidth
          label="Duration"
          value={duration}
          onChange={(e) => setDuration(+e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth required>
        <InputLabel>Intensity</InputLabel>
        <Select
          fullWidth
          value={intensity}
          onChange={(e) => setIntensity(e.target.value as IntensityString)}
        >
          {Object.values(Intensity).map((intensityValue) => (
            <MenuItem key={intensityValue} value={intensityValue}>
              {intensityValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddWorkout}
        fullWidth
      >
        Add Workout
      </Button>
    </Form>
  );
};
