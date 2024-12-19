import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <Outlet />
    </div>
  );
}

export default App;
