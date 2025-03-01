import logo from './assets/logo.png';
import x from './assets/fx.png';
import t from './assets/ft.png';

const Footer = () => {
  return (
    <div className=' bg-[#1A1C16]'>
      <footer className="md:w-11/12  mx-auto text-white py-4 px-8 md:flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className=" mx-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-2 justify-center pt-2 pb-4 text-xs lg:text-lg lg:gap-5  text-gray-300">
          {['Features', 'Roadmap', 'How it Works', 'Blog', 'Privacy Policy'].map((item, index) => (
            <a key={index} href="#" className="hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>


        {/* Action Icons */}
        <div className="flex justify-center space-x-3">
          <img src={x} alt="Close" className="" />
          <img src={t} alt="Telegram" className="" />

        </div>
      </footer>
    </div>
  );
};

export default Footer;
