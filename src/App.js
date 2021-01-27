import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import "./App.css";

import asbReducer from "./store/reducers/asb";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  asb: asbReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
