"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  { title: "Projects", path: "#projects" },
  { title: "Contacts", path: "#contact" },
];

function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          onClick={() => setNavBarOpen(false)}
          href={"/"}
          className="text-2xl lg:text-3xl text-white font-semibold"
        >
          Ankit Mishra
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className=" h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex pd-4 md:p-0 flex-row md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => setNavBarOpen(false)}
                  href={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? (
        <MenuOverlay links={navlinks} closeMenu={() => setNavBarOpen(false)} />
      ) : null}
    </nav>
  );
}

export default NavBar;
