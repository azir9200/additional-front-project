import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/tasks/Tasks";
import Chat from "../pages/chat/Chat";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
