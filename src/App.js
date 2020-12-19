import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <SignIn/>   */}
      <Routes />
    </>
  );
}

export default App;
