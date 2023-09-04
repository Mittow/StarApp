import { PersonDetail } from "./components/organisms/PersonDetail";
import { HomePage } from "./components/templates/HomePage";
import { Routes, Route } from "react-router-dom";
import { useIsMobile } from "./context/IsMobileContext";
import { Header } from "./components/molecules/Header";

export const AppRouter = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {!isMobile && <Route path=":slug" element={<PersonDetail />} />}
        </Route>

        {isMobile && <Route path="/:slug" element={<PersonDetail />} />}

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
};
