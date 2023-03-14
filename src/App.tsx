import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import LandingPage from "./pages/landing";
import LoginPage from "@/pages/landing/sign-in";
import RegisterPage from "@/pages/landing/sign-up";
import ResetPage from "@/pages/landing/reset";
import AdminPage from "./pages/admin";
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
        element: <div>This is Dashboard</div>,
      },
      {
        path: "accounts",
        element: <div>This is Accouts</div>,
      },
      {
        path: "devices",
        element: <div>This is Device</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
