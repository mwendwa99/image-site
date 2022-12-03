import React from "react";
import PhotoList from "./PhotoList";
import EditPhotoDetails from "./EditPhotoDetails";

const PhotoBrowser = (props) => {
  // the first photo in fetched data has an id of 15
  const [currentPhoto, setCurrentPhoto] = React.useState(15);

  const showImageDetails = (id) => {
    setCurrentPhoto(id);
  };

  return (
    <section className="container">
      <PhotoList
        photos={props.photos}
        showImageDetails={showImageDetails}
        addPhotoToFavorites={props.addPhotoToFavorites}
      />
      <EditPhotoDetails
        photos={props.photos}
        currentPhoto={currentPhoto}
        updatePhoto={props.updatePhoto}
      />
    </section>
  );
};

export default PhotoBrowser;
