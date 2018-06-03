import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  console.log("Weather Reducer: ", action.payload, state);

  switch (action.type) {
      case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
