import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Menu from "../components/Home/Menu";
import Jooter from "../components/Home/foot.js";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    setLoggedIn(isAuthenticated);
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  if (!loggedIn) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div className="App1">
      
        <Header />
        <Menu />
      
      <Jooter />
    </div>
  );
};

export default Home;
