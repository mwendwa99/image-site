import React from "react";

const PhotoThumb = (props) => {
  const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${props.photo.filename}`;

  {
    /* 
    When a user clicks the View button, this
    callback is called. It calls the `showImageDetails` method
    on the components props, which allows us to update the state
    of the parent component PhotoBrowser. The function, `showImageDetails`
    is passed down from the PhotoBrowser -> PhotoList -> PhotoThumb
  */
  }
  const handleViewClick = () => {
    props.showImageDetails(props.photo.id);
  };

  {
    /*
    Add a callback method here that calls the 
    addPhotoToFavorites function you defined in App.jsx.
    This method should be called by the Favorites button in the
    render method below. It should look very much like the `handleViewClick`
    callback above.
  */
  }
  //   handleAddToFavorite state array on click
  const handleAddToFavorite = () => {
    props.addPhotoToFavorites(props.photo);
  };

  return (
    <div className="photoBox" onClick={handleViewClick}>
      <figure>
        <img
          src={imgURL}
          className="photoThumb"
          title={props.photo.title}
          alt={props.photo.title}
        />
      </figure>
      <div>
        <h3>{props.photo.title}</h3>
        <p>
          {props.photo.location.city}, {props.photo.location.country}
        </p>
        {/* View button */}
        <button onClick={handleViewClick}>View</button>
        {/* Add Favorite button */}
        <button
          // favourite the image
          onClick={handleAddToFavorite}
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default PhotoThumb;
