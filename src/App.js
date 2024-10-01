import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "results",
      element: <SearchPage />
    }
]
}])

function App() {
  return (
      <Provider store={store}>
        <div className="font-roboto overflow-x-hidden pt-16">
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
  );
}

export default App;
