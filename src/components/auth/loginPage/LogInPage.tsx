import { useModal } from "@/context/hooks/useModal";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LogInPageProps {
  switchToRegister: () => void;
}

const LogInPage: React.FC<LogInPageProps> = ({ switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { closeModal } = useModal();

  const handleSwitchToRegister = () => {
    navigate("/register", {
      state: {
        backgroundLocation: location.state?.backgroundLocation || location,
      },
    });
    switchToRegister();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      closeModal(); 
      navigate(location.state?.backgroundLocation || "/", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      setError("Ошибка авторизации, проверьте введенные данные.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
      navigate(location.state?.backgroundLocation || "/", { replace: true });
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 z-50"
      onClick={handleBackgroundClick}
    >
      <form
        className="flex flex-col items-center w-full max-w-md text-black rounded-3xl bg-white p-8"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4">Вход в аккаунт</h2>
        <input
          className={`rounded-lg border text-base w-full py-4 px-4 mb-4 ${
            error ? "border-red-500 text-red-500" : ""
          }`}
          name="email"
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          className={`rounded-lg border text-base w-full py-4 px-4 mb-4 ${
            error ? "border-red-500 text-red-500" : ""
          }`}
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {error}
            <br />
            <button type="button" className="text-red-500 underline">
              Восстановить пароль?
            </button>
          </div>
        )}
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-xl"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Войти"}
        </button>
        <button
          className="bg-white text-blue-500 py-2 px-6 rounded-full border border-blue-500 mt-2.5 text-xl"
          type="button"
          onClick={handleSwitchToRegister}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
