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
import Header1 from "./components/Header1";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
