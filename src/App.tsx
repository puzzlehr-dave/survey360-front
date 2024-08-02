import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import SingleClient from "./pages/SingleClient";
import CreateSurvey from "./pages/CreateSurvey";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<SingleClient />} />
          <Route
            path="/clients/:id/surveys/create"
            element={<CreateSurvey />}
          />
        </Routes>
      </Router>
    </>
  );
}
