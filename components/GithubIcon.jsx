import IconButton from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GithubIcon = () => {
  return (
    <div>
      <IconButton>
        <GitHubIcon
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

export default GithubIcon;
