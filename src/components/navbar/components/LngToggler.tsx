import { useEffect, useState } from "react";
import i18n from "../../../i18n";

const LngToggler = () => {
  type TLangs = {
    [key: string]: { nativeName: string; image: string };
  };

  const lngs: TLangs = {
    en: { nativeName: "English", image: "assets/images/locale/Flag_en.png" },
    fa: { nativeName: "فارسی", image: "assets/images/locale/Flag_fa.png" },
  };

  const [open, setOpen] = useState<boolean>(false);
  const [currentLng, setCurrentLng] = useState<{ nativeName: string; image: string }>(lngs[i18n.resolvedLanguage || "en"]);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [currentLng]);

  return (
    <div className="relative">
      <button
        className="flex gap-2 rounded-md dark:text-white p-2 bg-slate-200 dark:bg-slate-600 "
        onClick={() => setOpen(!open)}
      >
        <img className="w-5 h-5 object-center" src={currentLng.image} alt={currentLng.nativeName} />
        <span>{currentLng.nativeName}</span>
      </button>
      <div
        className={`flex flex-col gap-3 z-10 absolute top-11 ltr:right-0 rtl:left-0 rounded-md bg-slate-300 dark:bg-slate-600 w-28 p-2 ${
          open ? "fade-in" : "fade-out"
        }`}
      >
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className={`flex gap-2 hover:dark:bg-slate-500 hover:bg-slate-400 p-2 rounded-md  dark:text-white ${
              i18n.resolvedLanguage === lng ? "dark:bg-slate-500 bg-slate-400" : ""
            }`}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng), setOpen(false), setCurrentLng(lngs[lng]);
            }}
          >
            <img className="w-5 h-5 object-center" src={lngs[lng].image} alt={lngs[lng].nativeName} />
            <span>{lngs[lng].nativeName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LngToggler;
