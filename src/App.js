import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/form";
import DisplayCard from "./components/displayCard/displayCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <DisplayCard />
      </div>
    </div>
  );
}

export default App;
