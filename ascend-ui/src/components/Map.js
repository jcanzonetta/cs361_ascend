function Map({ coord }) {
  console.log(coord);
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDuwZoWIIMJyOCtdaC7KhjSI4i8xA1LOyY&q=${coord}&maptype=satellite`;

  return (
    <>
      {coord ? (
        <iframe
          width={"vm"}
          height={"vh"}
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
