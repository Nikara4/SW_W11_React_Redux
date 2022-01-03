import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavMenu } from "./components/NavMenu";
import { Users } from "./containers";

function App() {
  return (
    <Router>
      <p>Hello world!</p>
      <NavMenu />
      <Routes>
        {/* <Route exact="true" path="/" element={<Home />}></Route> */}
        <Route exact="true" path="/users" element={<Users />}></Route>
        {/* <Route exact="true" path="/message" element={<Message />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
