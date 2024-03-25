import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { AuthenticationContext } from "../context/UserContext";
import AddBook from "../pages/AddBook";
import AlreadyRead from "../pages/AlreadyRead";
import AltLogin from "../pages/AltLogin";
import AltRegister from "../pages/AltRegister";
import CurrentlyReading from "../pages/CurrentlyReading";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import Reviews from "../pages/Reviews";
import Search from "../pages/Search";
import TopPicks from "../pages/TopPicks";
import ViewBook from "../pages/ViewBook";
import WantToRead from "../pages/WantToRead";
import WriteReview from "../pages/WriteReview";
import "./App.css";
import Protected from "./Protected";

function App() {
  const { authentication } = useContext(AuthenticationContext);
  return (
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout />}>
            <Route element = {<Protected isLoggedIn = {authentication.isLoggedIn} guest = {authentication.guest} />}>
              <Route path = "/currentlyreading" element = {<CurrentlyReading />} />
              <Route path = "/wanttoread" element = {<WantToRead />} />
              <Route path = "/alreadyread" element = {<AlreadyRead />} />
              <Route path="/addBook" element={<AddBook />} />
              <Route
                path="/writeReview/:ISBN/:title/:author"
                element={<WriteReview />}
              />
              <Route path="/reviews" element={<Reviews />} />
            </Route>
              <Route index element = {<TopPicks />} />
              <Route path = "/toppicks" element = {<TopPicks />} />
              
              <Route path="/search" element={<Search />} />
              <Route path="/viewBook/:ISBN" element={<ViewBook />} />
              
          </Route>
          <Route path = "/login" element = {<AltLogin />} />
          <Route path = "/register" element = {<AltRegister />} />
        </Routes>
      </BrowserRouter>

  );
}
export default App;
