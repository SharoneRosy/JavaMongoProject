import Students from "./components/Students";
import Edit from "./components/Edit";
import Add from "./components/Add";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Students/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
