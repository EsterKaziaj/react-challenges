import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebase } from "../firebase";
import { WorkoutType, WorkoutTypeName } from "../types";

export const useWorkoutTypes = () => {
  const [workoutTypes, setWorkoutTypes] = useState<WorkoutType[]>([]);
  const [workoutTypeNames, setWorkoutTypeNames] = useState<WorkoutTypeName[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutTypes = async () => {
      const workoutTypesCollection = collection(firebase, "workoutTypes");

      try {
        const workoutTypesSnapshot = await getDocs(workoutTypesCollection);

        const types = workoutTypesSnapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
            } as WorkoutType)
        );

        setWorkoutTypes(types);
        setWorkoutTypeNames(types.map((type) => type.name));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workout types:", error);
        setLoading(false);
      }
    };

    fetchWorkoutTypes();
  }, []);

  return { workoutTypes, workoutTypeNames, loading };
};
