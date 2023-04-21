import { Icon } from "@iconify/react";
import { SxProps, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  icon: string;
  size?: number;
  sx?: SxProps;
}

const Iconify: FC<Props> = ({ icon, size = 20, sx }) => {
  return (
    <Typography sx={sx}>
      <Icon icon={icon} width={size} height={size} />
    </Typography>
  );
};

export default Iconify;
