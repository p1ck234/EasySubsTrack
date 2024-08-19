import { FaPhone, FaEnvelope, FaTelegram } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-36">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Свяжитесь с нами
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Блок с телефоном */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
            <FaPhone className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="text-gray-600">+7 (123) 456-78-90</p>
            </div>
          </div>

          {/* Блок с email */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
            <FaEnvelope className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Электронная почта</h3>
              <p className="text-gray-600">info@subscriptionmanager.com</p>
            </div>
          </div>

          {/* Блок с Telegram */}
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
            <FaTelegram className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Telegram</h3>
              <a
                href="https://t.me/yourtelegram"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @yourtelegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
