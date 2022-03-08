function ClimbPhotos({ photos_array = [] }) {
  return (
    <div className="climb-photos-component">
      {photos_array.length > 0 ? (
        photos_array.map((filepath, key) => {
          return <img className="climb-photo" src={filepath} key={key}></img>;
        })
      ) : (
        <p>No photos.</p>
      )}
    </div>
  );
}

export default ClimbPhotos;
