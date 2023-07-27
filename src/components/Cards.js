import React from "react";
import Card from "../common-components/Card";
import { AlbumContext } from "../app-context/context";
import { SET_SEEN_ALBUM, SET_SELECTED_ALBUM } from "../app-context/actions";

export default function Cards() {
  const { state, dispatch } = React.useContext(AlbumContext);
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    if (state?.filteredAlbum?.length) {
      const consolidatedArray = [];
      for (let i = 0; i < 10; i++) {
        const filteredWithIndex = state.filteredAlbum.filter(
          (album) => album.userId === i + 1
        );
        consolidatedArray.push(filteredWithIndex);
      }
      setAlbums(consolidatedArray);
    }
  }, [state]);

  const showPhotos = React.useCallback(
    (e, albumId) => {
      e.preventDefault();
      const seenAlbums = [...state.seenAlbum, albumId].filter(
        (value, index, array) => array.indexOf(value) === index
      );
      dispatch({ type: SET_SEEN_ALBUM, payload: seenAlbums });
      dispatch({ type: SET_SELECTED_ALBUM, payload: albumId });

      console.log(state);
    },
    [state, dispatch]
  );
  return (
    <div className="card-container">
      {albums.map((album, index) => (
        <Card
          key={index}
          totalPhoto={album.length}
          userId={album[0]?.userId}
          onClick={(e) => showPhotos(e, album[0]?.userId)}
          className={
            album.length
              ? state.seenAlbum.filter(
                  (albumId) => albumId === album[0]?.userId
                ).length
                ? "seencard"
                : "card"
              : "hideCard"
          }
        />
      ))}
    </div>
  );
}
