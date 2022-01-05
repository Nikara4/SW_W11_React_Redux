import "./styles/main.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { NavMenu } from "./components/NavMenu";
import Home from "./pages/Home";
import { Users } from "./containers";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  const buttonLoad = (e) => {
    e.preventDefault();
  };
  const buttonReset = (e) => {
    e.preventDefault();
  };
  const buttonAdd = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Router>
        <Provider store={store}>
          <NavMenu />
          <Routes>
            <Route
              exact="true"
              path="/"
              element={
                <Home
                  handleResetButton={buttonReset}
                  handleAddButton={buttonAdd}
                />
              }
            />
            <Route exact="true" path="/users" element={<Users />} />
            {/* <Route exact="true" path="/message" element={<Message />}></Route> */}
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
