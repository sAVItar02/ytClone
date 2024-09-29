import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
      <Provider store={store}>
        <div className="font-roboto">
          <Head />
          <Body />
        </div>
      </Provider>
  );
}

export default App;
