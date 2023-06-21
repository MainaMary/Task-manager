import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import TaskListProvider from "./context/appContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskListProvider>
        <ToastContainer />
        <Navbar />
        <App />
      </TaskListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
