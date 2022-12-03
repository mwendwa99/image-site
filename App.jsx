import "./App.css";
import React, { useEffect, useState } from "react";
import HeaderApp from "./components/HeaderApp";
import PhotoBrowser from "./components/PhotoBrowser";
import FavoriteBar from "./components/FavoriteBar";
import * as cloneDeep from "lodash/cloneDeep";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // Using the useState hook, we create an empty photos array
  const [photos, setPhotos] = useState([]);
  // Add a Favorites state
  const [favorites, setFavorites] = useState([]);

  // the useEffect hook here is used to fetch data from the server
  // when the component is mounted
  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getData();
  }, []);

  const updatePhoto = (id, photo) => {
    // Create deep clone of photo array from state.
    // We will use a lodash function for that task.
    const copyPhotos = cloneDeep(photos);
    // find photo to update in cloned array
    const photoToReplace = copyPhotos.find((p) => p.id === id);
    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.location.city = photo.location.city;
    photoToReplace.location.country = photo.location.country;
    // update state
    setPhotos(copyPhotos);
  };

  // implement a addPhotoToFavorites(photo) and removePhotoFromFavorites(photo) function
  // to manage the internal state
  const addPhotoToFavorites = (photo) => {
    // check for undefined
    if (photo === undefined) {
      return;
    }
    // check if photo is already in favorites
    const isPhotoInFavorites = favorites.find((p) => p.id === photo.id);
    if (isPhotoInFavorites) {
      return;
    }
    // create a deep copy of the favorites array
    const copyFavorites = cloneDeep(favorites);
    // add the photo to the copy
    copyFavorites.push(photo);
    // update the state
    setFavorites(copyFavorites);
  };

  const removePhotoFromFavorites = (photo) => {
    // check for undefined
    if (photo === undefined) {
      return;
    }
    // create a deep copy of the favorites array
    const copyFavorites = cloneDeep(favorites);
    // find the index of the photo in the copy
    const index = copyFavorites.findIndex((p) => p.id === photo.id);
    // remove the photo from the copy
    copyFavorites.splice(index, 1);
    // update the state
    setFavorites(copyFavorites);
  };

  return (
    <main>
      <HeaderApp />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route
        path="/browse"
        exact
        render={(props) => (
          <section>
            {/* FavoriteBar will be added here */}
            <FavoriteBar
              photos={favorites}
              removePhotoFromFavorites={removePhotoFromFavorites}
            />
            <PhotoBrowser
              photos={photos}
              updatePhoto={updatePhoto}
              addPhotoToFavorites={addPhotoToFavorites}
            />
          </section>
        )}
      />
    </main>
  );
}

export default App;
