import "./App.css";
import Home from "./pages/Home";
import Convert from "./pages/Convert";
import Profile from "./pages/Profile";
import Currency from "./pages/Currency";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <>
    <Outlet />
    <Navbar />
  </>
);
function App() {
  return (
    <div className="mx-auto max-w-[26rem] bg-[#282828] h-screen max-h-[70rem] overflow-hidden relative text-white text-base">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "convert",
        element: <Convert />
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "currency",
        element: <Currency />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

export default App;
