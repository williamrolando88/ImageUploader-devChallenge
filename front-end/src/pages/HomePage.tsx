import { Button, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import Dropzone from "../components/Dropzone";

const HomePage: FC = () => {
  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      bgcolor="whitesmoke"
    >
      <Paper elevation={2} sx={{ width: 400 }}>
        <Stack gap={2} alignItems="center" padding={4}>
          <Typography variant="h5">Upload your image</Typography>

          <Typography variant="caption" color="GrayText">
            File should be JPEG, PNG...
          </Typography>

          <Dropzone />

          <Typography variant="caption" color="GrayText">
            Or
          </Typography>

          <Button variant="contained">Choose a file</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HomePage;
