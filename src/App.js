import Router from "./Routes/Router.js";
import UserLogin from "./Contexts/userLogin.js";
import { useState } from "react";

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(true);

  const userLogin = ()=>{
    setIsLoggedIn(prevStatus =>  !prevStatus)
  }

  return (
    <div className="App">
      <UserLogin.Provider value={{isLoggedIn, userLogin}} >
        <Router/>
      </UserLogin.Provider>
    </div>
  );
}

export default App;
