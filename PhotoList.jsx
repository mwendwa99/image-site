import React from "react";
import PhotoThumb from "./PhotoThumb";

const PhotoList = (props) => {
  if (props.photos.length > 1) {
    return (
      <article className="photos">
        {props.photos.map((p) => (
          <PhotoThumb
            photo={p}
            key={p.id}
            showImageDetails={props.showImageDetails}
            addPhotoToFavorites={props.addPhotoToFavorites}
          />
        ))}
      </article>
    );
  } else return null;
};
export default PhotoList;
