import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useModal } from "@/context/hooks/useModal";

interface RegistrationPageProps {
  switchToLogin: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  switchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { closeModal } = useModal();

  const handleSwitchToLogin = () => {
    navigate("/login", {
      state: {
        backgroundLocation: location.state?.backgroundLocation || location,
      },
    });
    switchToLogin();
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать не менее 6 символов");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Неверно указана почта");
      return;
    }

    setIsLoading(true);

    try {
      closeModal();
      navigate(location.state?.backgroundLocation || "/", { replace: true });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        // Проверяем, что ошибка является экземпляром FirebaseError
        if (error.code === "auth/email-already-in-use") {
          setError("Данная почта уже используется. Попробуйте войти.");
        } else {
          setError("Регистрация не удалась. Попробуйте еще раз.");
        }
      } else {
        setError("Произошла неизвестная ошибка. Пожалуйста, попробуйте снова.");
      }
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
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <input
          className={`rounded-lg border text-base w-full py-4 px-4 mb-4 ${
            error ? "border-red-500 text-red-500" : ""
          }`}
          name="username"
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
        <input
          className={`rounded-lg border text-base w-full py-4 px-4 mb-4 ${
            error ? "border-red-500 text-red-500" : ""
          }`}
          name="email"
          type="text"
          placeholder="Эл. почта"
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
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <input
          className={`rounded-lg border text-base w-full py-4 px-4 mb-10 ${
            error ? "border-red-500 text-red-500" : ""
          }`}
          name="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
        />
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-xl"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Зарегистрироваться"}
        </button>
        <button
          className="bg-white text-blue-500 py-2 px-6 rounded-full border border-blue-500 mt-2.5 text-xl"
          type="button"
          onClick={handleSwitchToLogin}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
