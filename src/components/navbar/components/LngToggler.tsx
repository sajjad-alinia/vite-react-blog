import i18n from "../../../i18n";

const LngToggler = () => {
  const lngs = {
    en: { nativeName: "English" },
    fa: { nativeName: "فارسی" },
  };
  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className={`text-white ${i18n.resolvedLanguage === lng ? "font-bold" : ""}`}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LngToggler;
