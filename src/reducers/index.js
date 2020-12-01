import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:12" },
    { title: "All Star", duration: "4:45" },
    { title: "I want", duration: "3:05" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
