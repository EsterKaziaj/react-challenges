// AllWorkouts.tsx
import React, { useState, useEffect, useContext } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { WorkoutItem } from "./WorkoutItem"; // Import the Workout component
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebase } from "../firebase"; // Import your Firebase configuration
import { Workout } from "../types";
import { AuthContext } from "../context/auth";

export const AllWorkouts: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [workouts, setWorkouts] = useState<Array<Workout>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserWorkouts = async () => {
      const workoutsCollection = collection(firebase, "workouts");
      const userWorkoutsQuery = query(
        workoutsCollection,
        where("userId", "==", user?.uid)
      );

      try {
        const userWorkoutsSnapshot = await getDocs(userWorkoutsQuery);
        const userWorkouts = userWorkoutsSnapshot.docs.map(
          (doc) => ({ ...doc.data() } as Workout)
        );

        setWorkouts(userWorkouts);
      } catch (error) {
        console.error("Error fetching user workouts:", error);
        return [];
      } finally {
        setLoading(false);
      }
    };
    fetchUserWorkouts();
  }, [user?.uid]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : workouts.length > 0 ? (
        workouts.map((workout) => <WorkoutItem key={workout.id} {...workout} />)
      ) : (
        <Typography>No workouts available. Add your first workout!</Typography>
      )}
    </div>
  );
};
