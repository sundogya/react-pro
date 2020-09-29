import React from "react";
import Routers from "./route";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./utils";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Routers />
      </PersistGate>
    </Provider>
  );
};
export default App;