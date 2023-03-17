import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import LandingPage from "./pages/landing";
import LoginPage from "@/pages/landing/sign-in";
import RegisterPage from "@/pages/landing/sign-up";
import ResetPage from "@/pages/landing/reset";
// admin pages
import AdminPage from "@/pages/admin";
import DashBoardPage from "@/pages/admin/dashboard";

import AccountPage, { loader as accountLoader } from "@/pages/admin/accounts";
import DetailAccountSection, {
  loader as detailAccountLoader,
} from "@/pages/admin/accounts/details";
import DevicePage, { loader as deviceLoader } from "@/pages/admin/devices";
import DetailDeviceSection, {
  loader as detailDeviceLoader,
} from "@/pages/admin/devices/details";
// handle router error
import ErrorPage from "@/pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "reset",
        element: <ResetPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "accounts",
        element: <AccountPage />,
        loader: accountLoader,
        children: [
          {
            path: ":id",
            errorElement: <ErrorPage />,
            element: <DetailAccountSection />,
            loader: detailAccountLoader,
          },
        ],
      },
      {
        path: "devices",
        element: <DevicePage />,
        loader: deviceLoader,
        children: [
          {
            path: ":id",
            errorElement: <ErrorPage />,
            element: <DetailDeviceSection />,
            loader: detailDeviceLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
