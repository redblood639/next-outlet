import { createBrowserRouter } from "react-router-dom";

// import pages
import LandingPage from "@/pages/landing";
import LoginPage from "@/pages/landing/sign-in";
import RegisterPage from "@/pages/landing/sign-up";

// admin pages
import AdminPage from "@/pages/admin";
import DashBoardPage from "@/pages/admin/dashboard";

// handle router error
import ErrorPage from "@/pages/error";
// Protected Router
import PrivateRoute from "@/components/privateRoute";

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
    ],
  },
]);

export { router };
