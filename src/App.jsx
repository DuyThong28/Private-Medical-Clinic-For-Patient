import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProcedurePage from "./pages/ProcedurePage";
import IntroductionPage from "./pages/IntroductionPage";
import ErrorPage from "./pages/Error";

const allRouter = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        index: true,
        element: <HomePage />,
      },
      { path: "/contact", element: <ContactPage /> },

      {
        path: "/procedure",
        element: <ProcedurePage />,
      },
      {
        path: "/introduce",
        element: <IntroductionPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

function App() {
  const router = createBrowserRouter(allRouter);

  return <RouterProvider router={router} />;
}

export default App;
