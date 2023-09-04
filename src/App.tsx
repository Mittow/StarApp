import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

import { IsMobileProvider } from "./context/IsMobileContext.tsx";
import { DataProvider } from "./context/DataContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <IsMobileProvider>
          <AppRouter />
        </IsMobileProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
