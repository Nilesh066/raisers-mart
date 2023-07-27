export const albumReducer = (state, action) => {
  switch (action.type) {
    case "setTotalAlbum":
      return { ...state, totalAlbum: action.payload };
    case "setFilteredAlbum":
      return { ...state, filteredAlbum: action.payload };
    case "setSeenAlbum":
      return { ...state, seenAlbum: action.payload };
    case "setSearchedText":
      return { ...state, searchedText: action.payload };
    case "setSelectedAlbum":
      return { ...state, selectedAlbum: action.payload };
    default:
      return { ...state };
  }
};
export const initialValue = {
  totalAlbum: [],
  filteredAlbum: [],
  seenAlbum: [],
  searchedText: "",
  selectedAlbum: 0,
};
