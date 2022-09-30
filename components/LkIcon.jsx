import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const LkIcon = () => {
  return (
    <div>
      <IconButton>
        <LinkedInIcon
          sx={{
            color: "white",
            width: "4ch",
            height: "4ch",
            "&:hover": {
              color: "rgb(129, 156, 216)",
              pointerEvents: "auto",
            },
          }}
        ></LinkedInIcon>
      </IconButton>
      <IconButton>
        <GitHubIcon
          onClick={(event) => {
            window.open("https://github.com/zall9", "_blank");
          }}
          sx={{
            color: "white",
            width: "4ch",
            height: "4ch",
            "&:hover": {
              color: "rgb(129, 156, 216)",
              pointerEvents: "auto",
            },
          }}
        ></GitHubIcon>
      </IconButton>
    </div>
  );
};

export default LkIcon;
