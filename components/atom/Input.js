import React from "react";

function Input({ onchange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onchange}
        className="border-0 px-3 py-3 placeholder-black mr-4 text-slate-600 relative bg-orange-300 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
      />
    </div>
  );
}

export default Input;
