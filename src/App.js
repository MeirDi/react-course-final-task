import "./App.css";
import {useEffect, useState } from "react";
import MoviesList from "./Components/MoviesList";
import Login from "./Components/login";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    <div className="App">
     { !isUserSignedIn?
        <Login onLoginSuccessful={onLoginSuccessful}/>
      :
        <MoviesList />
    }
    </div>
  );
}

export default App;
