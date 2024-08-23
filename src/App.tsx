import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { ModalProvider } from "./context/modalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
