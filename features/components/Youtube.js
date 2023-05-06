import React from "react";

const Youtube = ({ coverVideo }) => {
  const ratio = (315 / 560) * 100;

  return (
    <div className="relative pt-10">
      <iframe
        style={{ position: "absolute", top: 0, bottom: 0 }}
        width="100%"
        height="320px"
        src={`https://www.youtube.com/embed/${coverVideo}`}
        allow="accelerometer; autoplay; clipboard-write "
      />
    </div>
  );
};

export default Youtube;
