import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Content from "./Components/Content";
import Booking from "./routes/booking";
import Login from "./routes/login";
import Appointment from "./routes/appointment";
const root = ReactDOM.createRoot(document.getElementById("root"));
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
