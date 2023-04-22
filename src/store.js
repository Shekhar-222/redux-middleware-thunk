import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
let initialData = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
];

let rootReducer = (oldState, action) => {
  let newState = oldState;

  switch (action.type) {
    case "GET_USER_DATA":
      return [
        ...newState,
        {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
      ];

      break;
    case "ADD_USER_DATA":
      return [...newState, ...action.payload];

      break;

    default:
      break;
  }

  return newState;
};

export const store = createStore(
  rootReducer,
  initialData,
  applyMiddleware(thunk)
);
