import Features from "../features/Features";

const Main = () => {
  return (
    <>
      <main className="bg-white p-8 rounded-lg shadow-md mb-10 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Управляйте своими подписками легко и удобно
        </h1>
        <p className="text-xl mb-8">
          Отслеживайте все ваши подписки в одном месте и оптимизируйте расходы
        </p>
        <div className="space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Начать бесплатно
          </button>
        </div>
      </main>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Почему именно мы?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon1.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">Лучший способ управлять подписками</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon2.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">
              Централизованное управление подписками
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon3.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">Уведомления о сроках</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon4.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">Анализ и оптимизация расходов</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon5.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">Безопасность данных</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/icon6.png"
              alt="Иконка"
              className="mx-auto mb-4"
            />
            <div className="text-xl">Гибкость настройки уведомлений</div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Main;
