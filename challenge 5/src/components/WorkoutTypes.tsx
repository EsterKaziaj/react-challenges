// WorkoutTypes.tsx
import React from "react";
import { Chip } from "@mui/material";

interface WorkoutTypesProps {
  types: string[];
}

export const WorkoutTypes: React.FC<WorkoutTypesProps> = ({ types }) => {
  return (
    <div>
      {types.map((type) => (
        <Chip key={type} label={type} />
      ))}
    </div>
  );
};
