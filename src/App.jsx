import Counter from "components/Counter";
import Employee from "components/Employee";
import ToDo from "components/Todo";
import "./styles.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="text-center">Redux Toolkit</h1>
      <Counter />
      <ToDo />
      <Employee />
    </div>
  );
};

export default App;
