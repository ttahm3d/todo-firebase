import TodoList from "./components/TodoList/TodoList";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";
import firebase from "firebase";
import "./App.css";

const sighInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <main>
    <button onClick={sighInWithGoogle}>Sign In With Google</button>
  </main>
);

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <TodoList /> : <SignIn />}</div>;
}

// const SingIn = () => {
//   return (
//     <div>
//       <button onClick={OAuthLoginWithGoogle}> SignIn</button>
//     </div>
//   );
// };

export default App;
