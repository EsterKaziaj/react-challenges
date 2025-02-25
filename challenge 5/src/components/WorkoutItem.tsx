import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface WorkoutProps {
  type: string;
  duration: number;
  intensity: string;
}

export const WorkoutItem: React.FC<WorkoutProps> = ({
  type,
  duration,
  intensity,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{type}</Typography>
        <Typography>{`Duration: ${duration}`}</Typography>
        <Typography>{`Intensity: ${intensity}`}</Typography>
      </CardContent>
    </Card>
  );
};
