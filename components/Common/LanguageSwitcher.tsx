import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentlanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    setCurrentlanguage(lng);
    i18n.changeLanguage(lng);
  };

  // return (
  //   <div>
  //     <button onClick={() => changeLanguage('en')}>EN</button>
  //     <button onClick={() => changeLanguage('id')}>ID</button>
  //   </div>
  // );

  // return (
  //   <div className="flex space-x-4 p-4">
  //     <button
  //       onClick={() => changeLanguage('en')}
  //       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
  //     >
  //       EN
  //     </button>
  //     <button
  //       onClick={() => changeLanguage('id')}
  //       className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
  //     >
  //       ID
  //     </button>
  //   </div>
  // );

  return (
    <>
      <button
        onClick={() => changeLanguage("en")}
        // className={`px-4 py-2 rounded-md transition duration-200 bg-dark/20 dark:bg-white/20`}
        className={`rounded-md px-4 py-2 transition duration-200 ${
          currentLanguage === "en" ? "bg-dark/10 dark:bg-white/20" : ""
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("id")}
        // className={`px-4 py-2 rounded-md transition duration-200 bg-dark/20 dark:bg-white/20`}
        className={`rounded-md px-4 py-2 transition duration-200 ${
          currentLanguage === "id" ? "bg-dark/10 dark:bg-white/20" : ""
        }`}
      >
        ID
      </button>
    </>
  );
};

export default LanguageSwitcher;
