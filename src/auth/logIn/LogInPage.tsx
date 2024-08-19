const LogInPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Вход в аккаунт</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Имя пользователя
          </label>
          <input
            id="username"
            type="text"
            placeholder="Введите имя пользователя"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Пароль
          </label>
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Войти
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
