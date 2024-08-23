import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LogInPage from "./components/auth/loginPage/LogInPage";
import RegistrationPage from "./components/auth/registraionPage/RegistrationPage";
import { useModal } from "./context/hooks/useModal";
import Layout from "./components/layout/Layout";

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  const { modalState, openModal, closeModal, setCurrentPath, currentPath } =
    useModal();
  const state = location.state as { backgroundLocation?: Location };

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setCurrentPath(location.pathname);
      if (location.pathname === "/login") {
        openModal("login");
      } else if (location.pathname === "/register") {
        openModal("register");
      } else {
        closeModal();
      }
    }
  }, [location, currentPath, openModal, closeModal, setCurrentPath]);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      {modalState === "login" && (
        <LogInPage switchToRegister={() => openModal("register")} />
      )}
      {modalState === "register" && (
        <RegistrationPage switchToLogin={() => openModal("login")} />
      )}
    </>
  );
};
