import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import LandingPage from "./pages/landing";
import LoginPage from "@/pages/sign-in";
import RegisterPage from "@/pages/sign-up";
import ResetPage from "@/pages/reset";
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
    path: "/test",
    element: <div>1232</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
