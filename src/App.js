import Home from "./pages/Home";
import Convert from "./pages/Convert";
import Profile from "./pages/Profile";
import Currency from "./pages/Currency";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Settings from "./pages/Settings";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Transfer from "./pages/Transfer";
import Transactionhistory from "./pages/Transactionhistory";
import Addcard from "./components/Addcard";

const AppLayout = () => (
  <>
    <Outlet />
    <Navbar />
  </>
);
function App() {
  return (
    <div className="flex flex-col mx-auto max-w-[26rem] relative bg-[#282828] h-screen max-h-[70rem] overflow-hidden text-white text-base">
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
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "news",
            element: <News />,
          },
        ],
      },
      {
        path: "convert",
        element: <Convert />,
      },
      {
        path: "transfer",
        element: <Transfer />,
      },
      {
        path: "addcard",
        element: <Addcard />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "txnhistory",
            element: <Transactionhistory />,
          },
        ],
      },
      {
        path: "currency",
        element: <Currency />,
      },
    ],
  },
]);

export default App;
