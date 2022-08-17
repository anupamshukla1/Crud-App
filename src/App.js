import EditUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import Allusers from "./components/Allusers";
import Codeforinterview from "./components/Codeforinterview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/add" element={ <AddUser/>} />
        <Route path="/all" element={ <Allusers />} />
        <Route path="/" element={ <Codeforinterview />} />
        <Route path="/edit/:id" element={ <EditUser />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
