import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import GlobalStyle from "./pages/GlobalStyles";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
