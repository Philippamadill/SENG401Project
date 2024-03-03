import "./App.css";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import CurrentlyReading from "../pages/CurrentlyReading";
import WantToRead from "../pages/WantToRead";
import AlreadyRead from "../pages/AlreadyRead";
import TopPicks from "../pages/TopPicks";
import AddBook from "../pages/AddBook";
import { BrowserRouter, Route, Routes, ProtectedRoute } from "react-router-dom";
import Layout from "../Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          \
          <Route path="/currentlyreading" element={<CurrentlyReading />} />
          <Route path="/wanttoread" element={<WantToRead />} />
          <Route path="/alreadyread" element={<AlreadyRead />} />
          <Route path="/toppicks" element={<TopPicks />} />
          <Route path="/addbook" element={<AddBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
