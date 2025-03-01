import logo from './assets/logo.png';

const Nav = () => {
    return (
        <div className='fixed mb-44 top-0 left-0 w-full backdrop-blur-sm z-[99999]'>
            <nav className="w-11/12 mx-auto flex justify-between items-center py-4">
                <img src={logo} alt="Logo" className="w-32" />
                <button className="bg-white border text-black font-medium px-4 py-2 rounded-full">
                    Connect Wallet
                </button>
            </nav>
        </div>
    );
};

export default Nav;
