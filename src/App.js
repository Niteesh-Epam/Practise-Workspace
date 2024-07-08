import logo from "./logo.svg";
import SelectOption from "./components/select";
import "./App.css";

function App() {
  const items = [{ id: 1, name: "some-name" }];
  const handlerfun = (value) => {
    // set to some value in parent
  };
  return (
    <div className='App'>
      <SelectOption items={items} handleChange={handlerfun} />
    </div>
  );
}

export default App;
