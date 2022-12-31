import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CardSignIn from "./components/CardSignIn";
import CardSignUp from "./components/CardSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardMyCards from "./components/CardMyCards";
import CardLogOut from "./components/CardLogOut";
import PrivateRoutes from "./components/PrivateRoutes";
import CreateNewCard from "./components/CreateNewCard";
import DeleteCard from "./components/DeleteCard";
import EditCard from "./components/EditCard";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer />
      <header className="App-header">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="sign-in" element={<CardSignIn />}></Route>
          <Route path="sign-up" element={<CardSignUp />}></Route>
          <Route
            path="my-cards"
            element={
              <PrivateRoutes>
                <CardMyCards />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="create-card"
            element={
              <PrivateRoutes>
                <CreateNewCard />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="delete-card/:id"
            element={
              <PrivateRoutes>
                <DeleteCard />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="edit-card/:id"
            element={
              <PrivateRoutes>
                <EditCard />
              </PrivateRoutes>
            }
          ></Route>
          <Route path="log-out" element={<CardLogOut />}></Route>
        </Routes>
      </main>
      <footer className=" pt-3 py-2 text-center ">
        <Footer isDark={isDark} />
      </footer>
    </div>
  );
}

export default App;
