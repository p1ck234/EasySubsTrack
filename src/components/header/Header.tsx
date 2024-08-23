import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/shared/Logo";
import { useModal } from "@/context/hooks/useModal";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openModal, setCurrentPath } = useModal();

  const handleOpenLoginModal = () => {
    setCurrentPath(location.pathname);
    navigate("/login", { state: { backgroundLocation: location } });
    openModal("login");
  };

  return (
    <header className="py-4">
      <div className="flex justify-between items-center px-4 lg:px-36">
        <Logo />
        <nav className="flex space-x-6">
          <Link to="/" className="hover:underline">
            Главная
          </Link>
          <Link to="/features" className="hover:underline">
            Особенности
          </Link>
          <Link to="/contact" className="hover:underline">
            Контакты
          </Link>
          <button
            className="text-blue-500 hover:underline"
            onClick={handleOpenLoginModal}
          >
            Войти
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
