import React, { useState } from "react";

const pages = [
  { href: '/', text: 'Info' },
  { href: '/anmalan', text: 'Anmälan' },
  { href: '/deltagare', text: 'Deltagare' },
  { href: '/fotoinfo', text: 'Fotoinfo' },
  { href: '/vettoetikett', text: 'Vett och etikett' },
  { href: '/sillis', text: 'Sillis' },
  { href: '/efterfest', text: 'Efterfestanmälan' },
]

const Nav = ({ activePage }) => {
  const [navbar, setNavbar] = useState(false);

  const createElement = (page) => {
    return (
      <li key={page.href}>
        {activePage === page.href ? 
          <a href={page.href} className="block py-2 pl-3 pr-4 text-[#011b17] bg-[#ddcdaa] rounded md:bg-transparent md:text-[#ddcdaa] md:text-[#b8974e] md:p-0" aria-current="page">{page.text}</a>
        : <a href={page.href} className="block py-2 pl-3 pr-4 text-[#ddcdaa] rounded hover:bg-[#ddcdaa] hover:text-[#011b17] md:hover:bg-transparent md:border-0 md:hover:text-[#ddcdaa] md:hover:text-[#b8974e] md:p-0">{page.text}</a>
        }
      </li>
    )
  }

  return (
    <div className="md:grid md:place-items-center">
      <nav className="border-gray-200 md:px-2 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <button 
            type="button" 
            className="inline-flex items-center text-sm text-[#ddcdaa] rounded-lg md:hidden hover:bg-opacity-20 hover:bg-[#ddcdaa] focus:outline-none focus:ring-2 focus:ring-[#ddcdaa]" 
            onClick={() => setNavbar(!navbar)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto  ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
            { pages.map(page => createElement(page)) }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Nav;