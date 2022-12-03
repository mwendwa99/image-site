import React from "react";

const FavoriteItem = function (props) {
  // add click handler to remove photo from favorites
  const handleRemoveFromFavorites = () => {
    props.removePhotoFromFavorites(props.photo);
  };
  //   console.log(props);
  const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${props.photo.filename}`;
  return (
    <div className="favorites">
      <img
        src={imgURL}
        alt={props.photo.title}
        title={props.photo.title}
        height={50}
        width={50}
      />
      <h1>{props.photo.title}</h1>
      {/* remove from favorites */}
      <button onClick={handleRemoveFromFavorites}>Remove</button>
    </div>
  );
};

export default FavoriteItem;
