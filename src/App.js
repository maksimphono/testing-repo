import logo from './logo.svg';
import TodosComponent from "./components/todo_component.jsx"
import Navigation from "./Navigation"
//import './App.css';

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <TodosComponent></TodosComponent>
    </>
  );
}

export default App;
