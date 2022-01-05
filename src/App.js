import "./styles/main.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/rootReducer";
import { NavMenu } from "./components/NavMenu";
import Home from "./pages/Home";
import { Users } from "./containers";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavMenu />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/users" element={<Users />} />
          {/* <Route exact="true" path="/message" element={<Message />}></Route> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
