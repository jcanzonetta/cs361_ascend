import { useState, useEffect } from "react";

function Map({ coord }) {
  const [dimensions, getDimensions] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [src, setSrc] = useState();

  const setDimenions = () => {
    getDimensions({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    let str_coord = String(coord[1]) + "," + String(coord[0]);
    setSrc(
      `https://www.google.com/maps/embed/v1/place?key=AIzaSyDuwZoWIIMJyOCtdaC7KhjSI4i8xA1LOyY&q=${str_coord}&maptype=satellite`
    );
  }, [coord]);

  useEffect(() => {
    window.addEventListener("resize", setDimenions);

    return () => {
      window.removeEventListener("resize", setDimenions);
    };
  }, [dimensions]);

  return (
    <>
      {coord ? (
        <iframe
          width={dimensions.dynamicWidth * 0.5}
          height={dimensions.dynamicHeight * 0.5}
          style={{ border: 0 }}
          loading={"lazy"}
          allowFullScreen
          src={src}
        ></iframe>
      ) : (
        <p>We don't have coordinates for this climb yet.</p>
      )}
    </>
  );
}

export default Map;
