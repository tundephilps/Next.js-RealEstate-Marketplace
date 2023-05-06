import React from "react";

const VideoRender = ({ panorama }) => {
  return (
    <div className="relative pt-10">
      <iframe
        style={{ position: "absolute", top: 0, bottom: 0 }}
        width="100%"
        height="320px"
        src={panorama}
      />
    </div>
  );
};

export default VideoRender;
