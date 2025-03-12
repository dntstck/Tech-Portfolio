import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./components/AuthContext";
import MyProfile from "./components/MyProfile";
import Settings from "./components/Settings";
import { TotalPriceProvider } from "./components/TotalPriceContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/myprofile",
    element: <MyProfile />
  },
  {
    path: "/settings",
    element: <Settings />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <TotalPriceProvider> {/* wrapping the price context provider. */}
        <RouterProvider router={router} />
        </TotalPriceProvider>
        {/*<App />*/}
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
