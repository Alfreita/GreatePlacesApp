import { ADD_PLACES } from "../actions/placesAction";
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
        action.placeData.image
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
  return state;
};
export default placesReducers;
