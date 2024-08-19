import Logo from "@/shared/Logo";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="px-4 lg:px-36 flex flex-col lg:flex-row justify-between items-center">
        {/* Логотип */}
        <div className="mb-6 lg:mb-0">
          <Logo />
        </div>

        {/* Ссылки */}
        <div className="mb-6 lg:mb-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-center">
          <Link to="/" className="hover:underline">
            Главная
          </Link>
          <Link to="/features" className="hover:underline">
            Особенности
          </Link>
          <Link to="/contact" className="hover:underline">
            Контакты
          </Link>
          <Link to="/login" className="hover:underline">
            Войти
          </Link>
        </div>

        {/* Социальные сети */}
        <div className="flex space-x-4">
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaTelegram size={24} />
          </a>
          {/* Добавьте другие иконки социальных сетей здесь, если нужно */}
        </div>
      </div>

      {/* Авторские права */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2024 Subscription Manager. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
