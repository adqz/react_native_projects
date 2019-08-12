/*
NOTES
1. This is the file where we put all our action creators
2. An action creator is an object which creates the action using jsx
*/

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
