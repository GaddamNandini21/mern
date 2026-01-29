import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Counter from "./component/Counter";
import Service from "./pages/Service";
import UseState from "./Hooks/UseState";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Hook from "./Hooks/Hook";
import UseEffect from "./Hooks/UseEffect";
import UseEffectApi from "./Hooks/UseEffectApi";
import UseRef from "./Hooks/UseRef";
import UseReducer from "./Hooks/UseReducer";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Nandini" />} />
        <Route
          path="/about"
          element={<About name="Nandini" age={20} dept="CS&DS" />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Hooks */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallback" element={<UseCallback />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;

