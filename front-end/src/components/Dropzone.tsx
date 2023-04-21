import { Typography, alpha, styled } from "@mui/material";
import { FC } from "react";

const StyledDropZone = styled("div")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  "&:hover": {
    opacity: 0.72,
  },
  width: "340px",
  height: "220px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Dropzone: FC = () => {
  return (
    <StyledDropZone>
      <Typography color="GrayText" variant="caption">
        Drag & Drop your image here
      </Typography>
    </StyledDropZone>
  );
};

export default Dropzone;
