import React from "react";
import { NavLink, Link } from "react-router-dom";

const navItemBase =
  "relative px-5 py-2 rounded-full transition-all duration-300 ease-out";

export default function Navbar() {
  return (
    <header className="w-full bg-background">

      {/* TITLE BAR */}
      <div className="mx-auto max-w-7xl px-6 py-5 text-center">
        <Link to="/">
          <h1 className="inline-block px-6 py-2 text-3xl font-extrabold text-foreground">
            Govt College For Girls DaudKhel
          </h1>
        </Link>
      </div>

      {/* NAVBAR */}
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-center gap-6 rounded-3xl border-2 border-primary bg-white px-6 py-3 text-lg font-medium">
          
          {[
            { to: "/", label: "Home" },
            { to: "/admission", label: "Admission" },
            { to: "/faculty", label: "Faculty" },
            { to: "/programs", label: "Programs" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${navItemBase} ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

        </nav>
      </div>

      {/* SPACING BEFORE HERO */}
      <div className="mb-8" />
    </header>
  );
}
