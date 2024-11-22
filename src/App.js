import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import GlobalStyle from "./pages/GlobalStyles";
import "./App.css";
import Introduction from "./pages/Introduction";
import Introduction2 from "./pages/Introduction2";
import Introduction3 from "./pages/Introduction3";
import IntroFooter from "./components/IntroductionFooter";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Grouping from "./pages/Grouping";
import Main from "./pages/Main";
import Header1 from "./components/Header1";
import Book from "./pages/Book";
import BookItem from "./pages/BookItem";
import Store from "./pages/Store";
import Answer from "./pages/Answer";
import AnswerOpen from "./pages/AnswerOpen";
import AnswerYet from "./pages/AnswerYet";
import QuestionList from "./pages/QuestionList";
import Minformation from "./pages/MemberInformation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookitem" element={<BookItem />} />
        <Route path="/store" element={<Store />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/answeropen" element={<AnswerOpen />} />
        <Route path="/answeryet" element={<AnswerYet />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/grouping" element={<Grouping />} />
        <Route path="/main" element={<Main />} />
        <Route path="/questionlist" element={<QuestionList />} />
        <Route path="/memberinformation" element={<Minformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
