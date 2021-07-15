export const ADD_PLACES = "ADD_PLACES";

export const addPlace = (title: string) => {
  return { type: ADD_PLACES, placeData: { title } };
};
