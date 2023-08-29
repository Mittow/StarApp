import "./App.css";
import { Header } from "./components/molecules/Header";
import { PersonDetail } from "./components/organisms/PersonDetail";
import { HomePage } from "./components/templates/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsMobile } from "./context/IsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/:slug" element={<Header />} /> */} 
        <Route path="/" element={<HomePage />}>
          {!isMobile && <Route path=":slug" element={<PersonDetail />} />}
        </Route>

        {isMobile && <Route path=":slug" element={<PersonDetail />} />}
        <Route path="*" element={<p>Not Found</p>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
