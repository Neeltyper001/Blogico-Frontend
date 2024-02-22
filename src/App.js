import Router from "./Routes/Router.js";
import UserLogin from "./Contexts/userLogin.js";
import { useState } from "react";
import { LoginContextProvider } from "./Contexts/Context.js";

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const userLogin = ()=>{
    setIsLoggedIn(prevStatus =>  !prevStatus)
  }

  return (
    <div className="App">
      <UserLogin.Provider value={{isLoggedIn,userLogin}}>
        <Router/>
      </UserLogin.Provider>
    </div>
  );
}

export default App;
