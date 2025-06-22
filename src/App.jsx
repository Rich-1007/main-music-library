import { Suspense, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { useAuth } from "./context/auth";
import LoginPage from "./component/Login";
import NavBar from "./component/Navbar";

const RemoteMusicLibrary = React.lazy(() => import("remote_app/MusicLibrary"));
function App() {
  const { currentUser, logout } = useAuth();

  console.log(currentUser);

  if (!currentUser) {
    return <LoginPage />;
  }
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>Loading...</p>}>
        <RemoteMusicLibrary />
      </Suspense>
    </>
  );
}

export default App;
