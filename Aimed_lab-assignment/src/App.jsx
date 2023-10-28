import "./App.css";
import Avtar from "./assets/Avtar.svg";
import Login from "./components/Login";

function App() {
  return (
    <div className="login-screen">
      <img src={Avtar} alt="Avtar" />
      <Login />
    </div>
  );
}

export default App;
