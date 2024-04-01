const Footer = () => {
  return (
    <div className="flex-between-center w-full p-5 border-t text-gray-400">
      <span>this is footer :)</span>
      <span>version: {import.meta.env.VITE_APP_VERSION}</span>
    </div>
  );
};

export default Footer;
