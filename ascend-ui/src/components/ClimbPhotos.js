// Takes an array of filepaths pointing to images, and returns an img element containing the photo referenced.
// If an empty array, or no array is passed, only a p element is returned stating there are no photos.
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
