import React from "react";
import PropTypes from "prop-types";

const style = {
  ".video-responsive": {
    overflow: "hidden",
    "padding-bottom": "56.25%",
    position: "relative",
    height: 0,
  },
};
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="856"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        left: "0",
        top: "0",
        "@media (maxWidth: 1200px)": {
          width: "1%",
          height: "1%",
        },
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
