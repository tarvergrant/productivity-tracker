import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen p-4 flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;
