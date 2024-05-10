import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/products",
        element: <ProductPage />,
      },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
