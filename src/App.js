import "./styles/main.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavMenu } from "./components/NavMenu";
import Home from "./pages/Home";
import { Users } from "./containers";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/users" element={<Users />} />
          {/* <Route exact="true" path="/message" element={<Message />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
