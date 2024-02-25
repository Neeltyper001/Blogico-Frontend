import Router from "./Routes/Router.js";
import { useContext } from "react";
import { LoginContext, LoginContextProvider } from "./Contexts/Context.js";

function App() {
  const {user} = useContext(LoginContext)

  return (
    <div className="App">
      <LoginContextProvider>
        <Router/>
      </LoginContextProvider>
    </div>
  );
}

export default App;
