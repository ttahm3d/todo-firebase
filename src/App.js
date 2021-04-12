import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const SignIn = () => (
  <main>
    <button>Sign In With Google</button>
  </main>
);

function App() {
  const user = "test";

  return <div className="App">{user ? <TodoList /> : <SignIn />}</div>;
}

export default App;
