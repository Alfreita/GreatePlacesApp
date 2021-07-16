export const ADD_PLACES = "ADD_PLACES";

export const addPlace = (title: string, image: string) => {
  return { type: ADD_PLACES, placeData: { title, image } };
};
