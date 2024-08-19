const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-36 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Особенности нашего приложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Централизованное управление */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/control.svg"
              alt="Централизованное управление"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Централизованное управление
            </h3>
            <p className="text-gray-600">
              Управляйте всеми вашими подписками в одном месте. Не нужно
              запоминать пароли и логины — все под контролем.
            </p>
          </div>

          {/* Feature 2: Напоминания о сроках */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/alerts.svg"
              alt="Напоминания о сроках"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Напоминания о сроках
            </h3>
            <p className="text-gray-600">
              Никогда не пропустите важные сроки оплаты или продления подписки
              благодаря своевременным уведомлениям.
            </p>
          </div>

          {/* Feature 3: Анализ расходов */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/analytics.svg"
              alt="Анализ расходов"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Анализ расходов</h3>
            <p className="text-gray-600">
              Отслеживайте ваши расходы на подписки и оптимизируйте их, чтобы
              экономить деньги каждый месяц.
            </p>
          </div>

          {/* Feature 4: Безопасность данных */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/security.svg"
              alt="Безопасность данных"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Безопасность данных</h3>
            <p className="text-gray-600">
              Ваши данные под надежной защитой благодаря современным методам
              шифрования и хранения информации.
            </p>
          </div>

          {/* Feature 5: Мультиплатформенность */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/devices.svg"
              alt="Мультиплатформенность"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Мультиплатформенность
            </h3>
            <p className="text-gray-600">
              Наше приложение доступно на всех устройствах, позволяя вам
              управлять подписками в любое время и в любом месте.
            </p>
          </div>

          {/* Feature 6: Пользовательская поддержка */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src="/icons/support.svg"
              alt="Пользовательская поддержка"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Пользовательская поддержка
            </h3>
            <p className="text-gray-600">
              Наша команда поддержки всегда готова помочь вам в любых вопросах,
              связанных с управлением подписками.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
