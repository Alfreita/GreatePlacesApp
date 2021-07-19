import { ADD_PLACES, SET_PLACES } from "../actions/placesAction";
import Place from "../../model/place";

const initialState = {
  places: <any>[],
};

const placesReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PLACES:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coords.lat,
        action.placeData.coords.lng
      );
      return {
        places: state.places.concat(newPlace),
      };
    case SET_PLACES:
      return {
        places: action.places.map(
          (places: any) =>
            new Place(
              places.id.toString(),
              places.title,
              places.imageURL,
              places.address,
              places.lat,
              places.lng
            )
        ),
      };
    default:
      return state;
  }
  return state;
};
export default placesReducers;
