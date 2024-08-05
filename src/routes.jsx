import {SetApiKey} from "~/pages/SetApiKey.jsx";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "~/pages/home/index.jsx";
import {PrivateRoute} from "~/pages/city/components/PrivateRoute.jsx";
import {City} from "~/pages/city/index.jsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/set-api-key',
    element: <SetApiKey/>,
  },
  {
    path: '/city/:id',
    element: <City/>
  },
])

export default routes
