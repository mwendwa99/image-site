import React from "react";
import FavoriteItem from "./FavoriteItem.jsx";

const FavoriteBar = function (props) {
  const photos = props.photos;
  const removePhotoFromFavorites = props.removePhotoFromFavorites;

  return (
    <div className="favorites">
      {/* Add a map, looping over the favorites here. Each item should be passed to the
      `FavoriteItem` component you've created. */}
      {photos.map((photo) => (
        <FavoriteItem
          key={photo.title}
          photo={photo}
          removePhotoFromFavorites={removePhotoFromFavorites}
        />
      ))}
    </div>
  );
};

export default FavoriteBar;
