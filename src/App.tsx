import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux/es/exports";
import store from "@/store/store";
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
// Protected Router
import PrivateRoute from "./components/privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
    element: (
      <PrivateRoute>
        <AdminPage />
      </PrivateRoute>
    ),
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
