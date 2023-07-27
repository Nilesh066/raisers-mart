import React from "react";
import { AlbumContext } from "../app-context/context";
import {
  SET_FILTERED_ALBUM,
  SET_SEARCHRED_TEXT,
  SET_SELECTED_ALBUM,
} from "../app-context/actions";

export default function Header() {
  const { state, dispatch } = React.useContext(AlbumContext);

  const backToHome = React.useCallback(() => {
    dispatch({ type: SET_SELECTED_ALBUM, payload: 0 });
  }, [dispatch]);

  const handleSearch = React.useCallback(
    (e) => {
      const { value } = e.target;
      dispatch({ type: SET_SEARCHRED_TEXT, payload: value });
      const filteredAlbum = state.totalAlbum.filter((photos) =>
        photos.title.includes(value)
      );
      dispatch({ type: SET_FILTERED_ALBUM, payload: filteredAlbum });
    },
    [state, dispatch]
  );

  return (
    <header className="App-header">
      <div className="header-items">
        <span className="logo" onClick={backToHome}>
          Logo
        </span>
        <input
          className="search"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}
