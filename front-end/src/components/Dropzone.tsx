import { Typography, alpha, styled } from "@mui/material";
import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Iconify from "./Iconify";

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
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDropZone {...getRootProps()}>
      <input {...getInputProps()} />
      <Iconify
        icon="clarity:picture-line"
        size={100}
        sx={{ color: "GrayText" }}
      />
      <Typography color="GrayText" variant="caption">
        Drag & Drop your image here
      </Typography>
    </StyledDropZone>
  );
};

export default Dropzone;
