import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

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
    }
]
}])

function App() {
  return (
      <Provider store={store}>
        <div className="font-roboto overflow-x-hidden pt-16">
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
  );
}

export default App;
