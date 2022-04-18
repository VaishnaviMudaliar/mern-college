import "./styles.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Academics from "./components/pages/Academics/Academics";
import Login from "./components/common/Authentication/Login";

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Academics /> */}

      <Login /> 
    </div>
  );
}
