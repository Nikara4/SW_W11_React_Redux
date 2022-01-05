import "./styles/main.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/rootReducer";
import { NavMenu } from "./components/NavMenu";
import Home from "./containers/Home/Home";
import { Users } from "./containers";
import { Snackbar } from "./components/Snackbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavMenu />
        <Snackbar message="ty mordo" />
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
