import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Akun from "./routes/akun";
import Media from "./routes/media";
import Kontak from "./routes/kontak";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "akun/:akunId",
    element: <Akun />,
  },
  {
    path: "media/:mediaId",
    element: <Media />,
  },
  {
    path: "kontak/:kontakId",
    element: <Kontak />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
