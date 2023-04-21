import { Button, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
    >
      <Paper elevation={2} sx={{ width: 400 }}>
        <Stack gap={2} alignItems="center" padding={4}>
          <Typography>Upload your image</Typography>
          <Typography>File should be JPEG, PNG...</Typography>
          Here comes the dropzone
          <Typography>Or</Typography>
          <Button variant="contained">Choose a file</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HomePage;
