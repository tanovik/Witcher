import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Request from "./components/Request/Request";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/request" element={<Request />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
