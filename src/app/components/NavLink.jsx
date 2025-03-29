import React from "react";
import Link from "next/link";
function NavLink({ href, title,onClick }) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
export default NavLink;