import {store} from "~/stores/store.js";
import {RouterProvider} from "react-router-dom";
import routes from "~/routes.jsx";
import {Provider} from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  )
}
