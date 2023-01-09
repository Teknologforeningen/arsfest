import React, { useState } from "react";

const pages = [
  { href: '/', text: 'Info' },
  { href: '/anmalan', text: 'Anmälan' },
  { href: '/deltagare', text: 'Deltagare' },
  { href: '/fotoinfo', text: 'Fotoinfo' },
  { href: '/fundraising', text: 'Fundraising' },
  { href: '/historik', text: 'Historik' },
  { href: '/vettoetikett', text: 'Vett och etikett' }
]

const Nav = ({ activePage }) => {
  const [navbar, setNavbar] = useState(false);

  const createElement = (page) => {
    return (
      <li key={page.href}>
        {activePage === page.href ? 
          <a href={page.href} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">{page.text}</a>
        : <a href={page.href} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">{page.text}</a>
        }
      </li>
    )
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            onClick={() => setNavbar(!navbar)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto  ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            { pages.map(page => createElement(page)) }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Nav;