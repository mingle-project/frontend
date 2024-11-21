import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyle from './pages/GlobalStyles';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Grouping from './pages/Grouping';
import Main from './pages/Main';
import Book from './pages/Book';
import BookItem from './pages/BookItem';
import StoreItem from './pages/StoreItem';
import Answer from './pages/Answer';
import QuestionList from './pages/QuestionList';
import Minformation from './pages/MemberInformation';
import Introduction from './pages/IntroductionTransition';

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
        <Route path="/storeitem" element={<StoreItem />} />
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
