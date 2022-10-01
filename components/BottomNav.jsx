import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React from "react";
import { GiArtificialHive } from "react-icons/gi";
import { SiSololearn } from "react-icons/si";
import { ImMail } from "react-icons/im";
import { HiInformationCircle } from "react-icons/hi";
const actions = [
  { icon: <HiInformationCircle />, name: "A propos" },
  { icon: <GiArtificialHive />, name: "Hive" },
  { icon: <SiSololearn />, name: "LaWeb" },
  { icon: <ImMail />, name: "Contact" },
];
const BottomNav = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      //style that make the box and its content always at the bottom of the screen
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 0, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default BottomNav;
