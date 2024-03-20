import "./App.css";
import LoginPage from "../pages/Login";
import AltLogin from "../pages/AltLogin";
import AltRegister from "../pages/AltRegister";
import RegisterPage from "../pages/Register";
import CurrentlyReading from "../pages/CurrentlyReading";
import WantToRead from "../pages/WantToRead";
import AlreadyRead from "../pages/AlreadyRead";
import TopPicks from "../pages/TopPicks";
import Protected from "./Protected";
import AddBook from "../pages/AddBook";
import Search from "../pages/Search";
import ViewBook from "../pages/ViewBook";
import Reviews from "../pages/Reviews";
import WriteReview from "../pages/WriteReview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { AuthenticationContext } from "../context/UserContext";
import { useContext } from "react";

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
              <Route path = "/login" element = {<AltLogin />} />
              <Route path = "/register" element = {<AltRegister />} />
              <Route path="/search" element={<Search />} />
              <Route path="/viewBook/:ISBN" element={<ViewBook />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}
export default App;
