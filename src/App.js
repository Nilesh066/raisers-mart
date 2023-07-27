import React, { useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/header";
import { fetchCall } from "./utils/apiCall";
import { getAlbumUrl } from "./utils/constants";
import { albumReducer, initialValue } from "./app-context/reducer";
import { AlbumContext } from "./app-context/context";
import Lists from "./components/Lists";
import { SET_TOTAL_ALBUM, SET_FILTERED_ALBUM } from "./app-context/actions";

function App() {
  const [state, dispatch] = React.useReducer(albumReducer, initialValue);

  useEffect(() => {
    fetchCall(getAlbumUrl).then((data) => {
      dispatch({ type: SET_TOTAL_ALBUM, payload: data });
      dispatch({ type: SET_FILTERED_ALBUM, payload: data });
    });
  }, []);

  const renderPage = React.useMemo(() => {
    const selectedAlbumPhotos = state?.filteredAlbum?.filter(
      (album) => album.userId === state.selectedAlbum
    );
    return state?.selectedAlbum ? (
      <Lists selectedAlbumPhotos={selectedAlbumPhotos} />
    ) : (
      <Cards />
    );
  }, [state?.selectedAlbum, state?.searchedText]);

  return (
    <AlbumContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        {renderPage}
      </div>
    </AlbumContext.Provider>
  );
}

export default App;
