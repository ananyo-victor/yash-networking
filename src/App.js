import LogIn from "./LogIn";
import Registration from "./Registration";
import Profile1 from "./Profile1";
import Profile from "./Profile";
import Header from "./header";
import Landing from "./Landing";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile1" element={<Profile1 />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
