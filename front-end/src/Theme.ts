import "@fontsource/poppins";
import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Robot"].join(","),
  },
});
