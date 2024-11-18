import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyle from './pages/GlobalStyles';
import './App.css';
import Introduction from './pages/Introduction';
import Introduction2 from './pages/Introduction2';
import Introduction3 from './pages/Introduction3';
import IntroFooter from './components/IntroductionFooter';
import Header1 from './components/Header1';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
