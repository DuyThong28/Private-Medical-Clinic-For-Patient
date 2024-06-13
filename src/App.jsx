import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProcedurePage from "./pages/ProcedurePage";
import IntroductionPage from "./pages/IntroductionPage";
import ErrorPage from "./pages/Error";
import BookingPage from "./pages/BookingPage";
import SearchPage from "./pages/SearchPage";

const allRouter = [
  {
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
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
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
