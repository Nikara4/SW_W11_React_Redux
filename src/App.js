import "./styles/main.sass";
import { CreateStore } from "redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavMenu } from "./components/NavMenu";
import Home from "./pages/Home";
import { Users } from "./containers";
import reducer, { add, load, reset } from "./containers/Users/redux";

const store = CreateStore(reducer);

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
        <NavMenu />
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <Home
                handleLoadButton={buttonLoad}
                handleResetButton={buttonReset}
                handleAddButton={buttonAdd}
              />
            }
          />
          <Route exact="true" path="/users" element={<Users />} />
          {/* <Route exact="true" path="/message" element={<Message />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
