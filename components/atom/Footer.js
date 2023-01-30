import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-200 pt-8 pb-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Movie App by
                <a className="text-slate-500 hover:text-slate-800">
                  Dhanis Al Ghifari
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
