import React, { useState, useRef, useEffect }  from "react";
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

import LogoIcon from '../images/Logo.svg';

function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

  // закрыть мобильное меню при нажатии снаружи
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // закрыть мобильное меню, если нажата клавиша esc
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });


return (
    <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-48"> 

                {/* Site branding */}
                <div className="shrink-0 mr-4">
                    {/* Logo */}
                    <Link to="/" className="block " aria-label="EVA" >
                        <img src={LogoIcon} width="150" height="150" alt="Logo Icon" />
                    </Link>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex md:grow">

                    {/* Desktop menu links */}
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li>
                            <Link to="/features" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                NavItem
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                NavItem
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                                NavItem
                            </Link>
                        </li>
                        <Dropdown title="Support">
                        {/* 2nd level: hover */}
                        <li>
                            <Link to="/contact" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/help" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Help center</Link>
                        </li>
                        <li>
                            <Link to="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">404</Link>
                        </li>
                         </Dropdown>

                    </ul>

                   {/* Desktop sign in links */}
                   <ul className="flex grow justify-end flex-wrap items-center">
                        <li>
                            <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                Войти
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" >
                                Зарегистрироваться
                            </Link>
                        </li>
                   </ul>

                </nav>

                {/* Mobile menu */}
                <div className="md:hidden">

                    {/* Hamburger button */}
                    <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6 fill-current text-gray-300 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        </svg>

                    </button>


                </div>

            </div>

        </div>
    </header>
);
}

export default Header;